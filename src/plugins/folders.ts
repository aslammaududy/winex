import {Elysia} from "elysia";
import {db} from "../db";
import {folders} from "../schema";
import {buildTree} from "./buildTree";
import {Folder} from "../types/folder"

export const fd = new Elysia()
    .get("/folders", async () => {
        const allFolders = await db.select().from(folders)
        return buildTree(allFolders as Folder[])
    });

