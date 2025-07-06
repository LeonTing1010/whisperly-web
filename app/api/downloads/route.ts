import { NextResponse } from 'next/server'

export async function GET() {
  const version = process.env.NEXT_PUBLIC_DOWNLOAD_VERSION || 'v1.1.0';
  const base = `https://github.com/LeonTing1010/whisperly-web/releases/download/${version}`;
  return NextResponse.json({
    version,
    windows: {
      exe: `${base}/Whisperly.exe`,
      setup: `${base}/Whisperly_0.1.0_x64-setup.exe`,
    },
    macos: {
      intel: `${base}/Whisperly_0.1.0_x64.dmg`,
      arm: `${base}/Whisperly_0.1.0_aarch64.dmg`,
    },
    linux: {
      deb: `${base}/Whisperly_0.1.0_amd64.deb`,
      rpm: `${base}/Whisperly-0.1.0-1.x86_64.rpm`,
      appimage: `${base}/Whisperly_0.1.0_amd64.AppImage`,
    },
  });
}
