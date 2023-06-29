export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return {
    // massege: getMethod(event) + "hello world"
    massege: body
  }
})
