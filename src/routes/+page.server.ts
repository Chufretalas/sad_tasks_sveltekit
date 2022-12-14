import type { Actions, PageServerLoad } from './$types'
import PocketBase from "pocketbase"
import type ITask from '$interfaces/ITask';

const client = new PocketBase('http://127.0.0.1:8090');

export const actions: Actions = {
  save_task: async ({ cookies, request }) => {
    const data = await request.formData()
    const title = data.get("title")
    const content = data.get("content")
    let success = true
    try {
      await client.records.create("tasks", { title, content })
    } catch (error) {
      console.log(error)
      success = false
    }
    return { success }
  }
}


export const load: PageServerLoad = async ({ params }: any) => {
  let mappedData: ITask[] = []
  try {
    const data = await client.records.getFullList("tasks")
    mappedData = data.map((task) => {
      return {
        id: task.id,
        title: task.title,
        content: task.content,
        created: task.created,
        updated: task.updated
      }
    })
  } catch (error) {
  }

  return {
    post: {
      tasks: mappedData
    }
  }
}