import { rastrearEncomendas } from "correios-brasil/dist";

class GetPackagesStatusUseCase {

    async execute(codes: string[], name: string): Promise<void | Array<any>> {

        const packagesEvents = await rastrearEncomendas(codes)
        
        return packagesEvents

    }
}

export { GetPackagesStatusUseCase }