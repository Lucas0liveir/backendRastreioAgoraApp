import { Request, Response } from "express";
import { GetPackagesStatusUseCase } from "../useCases/getPackagesStatusUseCase";

class TrackPackagesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { codes, name } = request.body

        try {

            const trackPackagesUseCase = new GetPackagesStatusUseCase()

            const trackResponse = await trackPackagesUseCase.execute(codes, name)

            console.log(trackResponse)
            return response.json(trackResponse)
            
        } catch (err) {
            return response.status(400).json({ error: err.message })
        }

    }
}

export { TrackPackagesController }