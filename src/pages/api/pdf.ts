import puppeteer from "puppeteer-core";
import type { NextApiRequest, NextApiResponse } from "next";
import { PassThrough } from "stream";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods

  if (req.method !== 'POST') {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }

  const { data, error } = z.object({
    url: z.string().url(),
  }).strict().safeParse(req.body);

  if (error) {
    return res.status(400).json({
      message: error.issues[0].message,
    })
  }
  
  const TOKEN = process.env.BROWSERLESS_TOKEN;

  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://production-sfo.browserless.io?token=${TOKEN}`,
  });

  const page = await browser.newPage();
  await page.goto(data.url, { waitUntil: 'domcontentloaded' });

  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(images.map(img => {
      if (img.complete && img.naturalWidth > 0) return;
      return new Promise((res) => {
        img.onload = img.onerror = res;
      });
    }));
  });

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
  });

  const stream = new PassThrough();
  stream.end(pdfBuffer);

  res.setHeader('Content-Type', 'application/pdf');
  stream.pipe(res);
  await browser.close();
}