import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var __mongoose_cache__: MongooseCache | undefined;
}

const globalCache = globalThis.__mongoose_cache__ ?? {
  conn: null,
  promise: null
};

if (!globalThis.__mongoose_cache__) {
  globalThis.__mongoose_cache__ = globalCache;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (globalCache.conn) return globalCache.conn;
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("Database connection is not configured");
  }

  if (!globalCache.promise) {
    globalCache.promise = mongoose
      .connect(mongoUri, {
        dbName: process.env.MONGODB_DB_NAME || undefined,
        serverSelectionTimeoutMS: 10000
      })
      .then((instance) => instance)
      .catch((error) => {
        globalCache.promise = null;
        throw error;
      });
  }

  try {
    globalCache.conn = await globalCache.promise;
  } catch (error) {
    globalCache.conn = null;
    throw new Error("Database connection failed");
  }

  return globalCache.conn;
}
