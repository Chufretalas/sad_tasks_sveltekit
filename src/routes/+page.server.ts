import type { Actions } from './$types'
import PocketBase from "pocketbase"

const client = new PocketBase('http://127.0.0.1:8090');
 
export const actions: Actions = {
  save_task: async ({cookies, request}) => {
    const data = await request.formData()
    const title = data.get("title")
    const content = data.get("content")
    console.dir({title, content})
    const success = await client.records.create("tasks", {title, content})
    // const results = await client.records.getFullList("tasks")
  }
}