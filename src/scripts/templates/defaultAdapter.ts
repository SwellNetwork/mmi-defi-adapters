export function defaultAdapterTemplate(
  protocolKey: string,
  adapterClassName: string,
  productId: string,
) {
  return `import { Chain } from '../../../../core/constants/chains'
  import {
    IMetadataBuilder,
    CacheToFile,
  } from '../../../../core/decorators/cacheToFile'
  import { NotImplementedError } from '../../../../core/errors/errors'
  import { CustomJsonRpcProvider } from '../../../../core/utils/customJsonRpcProvider'
  import {
    ProtocolAdapterParams,
    ProtocolDetails,
    PositionType,
    GetPositionsInput,
    GetEventsInput,
    MovementsByBlock,
    GetTotalValueLockedInput,
    GetProfitsInput,
    GetApyInput,
    GetAprInput,
    GetConversionRateInput,
    ProtocolTokenApr,
    ProtocolTokenApy,
    ProtocolTokenUnderlyingRate,
    ProfitsWithRange,
    ProtocolTokenTvl,
    ProtocolPosition,
  } from '../../../../types/adapter'
  import { Erc20Metadata } from '../../../../types/erc20Metadata'
  import { IProtocolAdapter } from '../../../../types/IProtocolAdapter'
  import { Protocol } from '../../../protocols'
  
  export class ${adapterClassName} implements IProtocolAdapter, IMetadataBuilder {
    productId = '${productId}'
    protocolId: Protocol
    chainId: Chain
  
    private provider: CustomJsonRpcProvider
  
    constructor({ provider, chainId, protocolId }: ProtocolAdapterParams) {
      this.provider = provider
      this.chainId = chainId
      this.protocolId = protocolId
    }
  
    /**
     * Update me.
     * Add your protocol details
     */
    getProtocolDetails(): ProtocolDetails {
      return {
        protocolId: this.protocolId,
        name: '${protocolKey}',
        description: '${protocolKey} defi adapter',
        siteUrl: 'https:',
        iconUrl: 'https://',
        positionType: PositionType.Supply,
        chainId: this.chainId,
        productId: this.productId,
      }
    }
  
    /**
     * Update me.
     * Add logic to build protocol token metadata
     * For context see dashboard example ./dashboard.png
     * We need protocol token names, decimals, and also linked underlying tokens
     */
    @CacheToFile({ fileKey: 'protocol-token' })
    async buildMetadata() {
      throw new NotImplementedError()
  
      return {}
    }
  
    /**
     * Update me.
     * Returning an array of your protocol tokens.
     */
    async getProtocolTokens(): Promise<Erc20Metadata[]> {
      throw new NotImplementedError()
    }
  
    /**
     * Update me.
     * Add logic to get userAddress positions in your protocol
     */
    async getPositions(_input: GetPositionsInput): Promise<ProtocolPosition[]> {
      throw new NotImplementedError()
    }
  
    /**
     * Update me.
     * Add logic to get user's withdrawals per position by block range
     */
    async getWithdrawals(_input: GetEventsInput): Promise<MovementsByBlock[]> {
      throw new NotImplementedError()
    }
  
    /**
     * Update me.
     * Add logic to get user's deposits per position by block range
     */
    async getDeposits(_input: GetEventsInput): Promise<MovementsByBlock[]> {
      throw new NotImplementedError()
    }
  
    /**
     * Update me.
     * Add logic to get tvl in a pool
     *
     */
    async getTotalValueLocked(
      _input: GetTotalValueLockedInput,
    ): Promise<ProtocolTokenTvl[]> {
      throw new NotImplementedError()
    }
  
    /**
     * Update me.
     * Add logic to calculate the underlying token rate of 1 protocol token
     */
    async getProtocolTokenToUnderlyingTokenRate(
      _input: GetConversionRateInput,
    ): Promise<ProtocolTokenUnderlyingRate> {
      throw new NotImplementedError()
    }
  
    /**
     * Update me.
     * Add logic to calculate the users profits
     */
    async getProfits(_input: GetProfitsInput): Promise<ProfitsWithRange> {
      throw new NotImplementedError()
    }
  
    async getApy(_input: GetApyInput): Promise<ProtocolTokenApy> {
      throw new NotImplementedError()
    }
  
    async getApr(_input: GetAprInput): Promise<ProtocolTokenApr> {
      throw new NotImplementedError()
    }
  }`
}
