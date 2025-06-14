import {Folder} from "../types/folder";

export  function buildTree(flatFolders: Folder[]): any[] {
    const idMap = new Map<number, Folder>()
    const tree: Folder[] = []

    // Tambahkan properti `children` ke setiap folder dan simpan di Map berdasarkan ID-nya
    flatFolders.forEach(folder => {
        folder.children = []
        idMap.set(folder.id, folder)
    })

    // Iterasi semua folder dan masukkan ke dalam `children` parent-nya
    flatFolders.forEach(folder => {
        if (folder.parentId === null) {
            // Jika root folder, masukkan langsung ke tree
            tree.push(folder)
        } else {
            const parent = idMap.get(folder.parentId)
            if (parent) {
                parent.children.push(folder)
            }
        }
    })

    return tree
}