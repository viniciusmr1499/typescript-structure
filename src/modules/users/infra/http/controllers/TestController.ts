import { Request, Response } from 'express'

export default class TestController {
  public async show (_: Request, response: Response): Promise<Response> {
    return response.json({
      message: 'Test success'
    })
  }
}
