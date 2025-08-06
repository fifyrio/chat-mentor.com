import { NextResponse } from 'next/server';
import { R2 } from 'node-cloudflare-r2';
import { v4 as uuidv4 } from 'uuid';

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID || "";
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || "";
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || "";
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || "";
const R2_ENDPOINT = process.env.R2_ENDPOINT || "";

// 添加路由配置
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // 添加基本的认证检查
    // const session = await getSession(request); // 需要实现认证
    // if (!session) {
    //   return NextResponse.json({ error: '未授权访问' }, { status: 401 });
    // }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: '没有文件' }, { status: 400 });
    }

    // 添加文件大小限制
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: '文件太大' }, { status: 400 });
    }

    // 添加文件类型验证
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: '不支持的文件类型' }, { status: 400 });
    }

    const r2Client = new R2({
      accountId: R2_ACCOUNT_ID,
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    });

    const bucket = r2Client.bucket(R2_BUCKET_NAME);
    const buffer = await file.arrayBuffer();
    const uuid = uuidv4();
    const key = `image-to-prompt/${uuid}.${file.type.split('/')[1]}`;

    await bucket.uploadStream(Buffer.from(buffer), key, undefined, file.type);
    const url = `${R2_ENDPOINT}/${key}`;

    return NextResponse.json({ url });
  } catch (error) {
    // 不要在生产环境中返回具体错误信息
    return NextResponse.json({ error: '上传失败' }, { status: 500 });
  }
}

