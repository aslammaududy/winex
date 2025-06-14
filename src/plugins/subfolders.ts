import {Elysia} from "elysia";
import {db} from "../db";
import {folders} from "../schema";
import {eq} from "drizzle-orm";

export const subfolders = new Elysia()
    .get("folders/:id/subfolders",
        async ({params}) =>
            await db.select().from(folders).where(eq(folders.parentId, +params.id))
    );