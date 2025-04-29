import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export async function getPuppeteerBrowser() {
  // Local development
  if (process.env.NODE_ENV === 'development') {
    return puppeteer.launch({
      headless: true,
    });
  }
  
  // Vercel serverless environment
  return puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });
}
