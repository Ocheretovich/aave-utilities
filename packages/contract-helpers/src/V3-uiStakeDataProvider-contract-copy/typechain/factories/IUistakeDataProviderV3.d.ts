/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../common';

export declare namespace IStakedTokenDataProvider {
  export type StakedTokenDataStruct = {
    stakedTokenTotalSupply: BigNumberish;
    stakedTokenTotalRedeemableAmount: BigNumberish;
    stakeCooldownSeconds: BigNumberish;
    stakeUnstakeWindow: BigNumberish;
    stakedTokenPriceEth: BigNumberish;
    rewardTokenPriceEth: BigNumberish;
    stakeApy: BigNumberish;
    distributionPerSecond: BigNumberish;
    inPostSlashingPeriod: boolean;
    distributionEnd: BigNumberish;
  };

  export type StakedTokenDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
  ] & {
    stakedTokenTotalSupply: BigNumber;
    stakedTokenTotalRedeemableAmount: BigNumber;
    stakeCooldownSeconds: BigNumber;
    stakeUnstakeWindow: BigNumber;
    stakedTokenPriceEth: BigNumber;
    rewardTokenPriceEth: BigNumber;
    stakeApy: BigNumber;
    distributionPerSecond: BigNumber;
    inPostSlashingPeriod: boolean;
    distributionEnd: BigNumber;
  };

  export type StakedTokenUserDataStruct = {
    stakedTokenUserBalance: BigNumberish;
    stakedTokenRedeemableAmount: BigNumberish;
    underlyingTokenUserBalance: BigNumberish;
    rewardsToClaim: BigNumberish;
    userCooldownTimestamp: BigNumberish;
    userCooldownAmount: BigNumberish;
  };

  export type StakedTokenUserDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
  ] & {
    stakedTokenUserBalance: BigNumber;
    stakedTokenRedeemableAmount: BigNumber;
    underlyingTokenUserBalance: BigNumber;
    rewardsToClaim: BigNumber;
    userCooldownTimestamp: number;
    userCooldownAmount: BigNumber;
  };
}

export interface AbiInterface extends utils.Interface {
  functions: {
    'AAVE_PRICE_FEED()': FunctionFragment;
    'ETH_USD_PRICE_FEED()': FunctionFragment;
    'STAKED_AAVE()': FunctionFragment;
    'getStakedAssetData(address,address)': FunctionFragment;
    'getStakedAssetDataBatch(address[],address[])': FunctionFragment;
    'getStakedUserData(address,address,address)': FunctionFragment;
    'getStakedUserDataBatch(address[],address[],address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'AAVE_PRICE_FEED'
      | 'ETH_USD_PRICE_FEED'
      | 'STAKED_AAVE'
      | 'getStakedAssetData'
      | 'getStakedAssetDataBatch'
      | 'getStakedUserData'
      | 'getStakedUserDataBatch',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'AAVE_PRICE_FEED',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'ETH_USD_PRICE_FEED',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'STAKED_AAVE',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getStakedAssetData',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'getStakedAssetDataBatch',
    values: [string[], string[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getStakedUserData',
    values: [string, string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'getStakedUserDataBatch',
    values: [string[], string[], string],
  ): string;

  decodeFunctionResult(
    functionFragment: 'AAVE_PRICE_FEED',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'ETH_USD_PRICE_FEED',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'STAKED_AAVE',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getStakedAssetData',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getStakedAssetDataBatch',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getStakedUserData',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getStakedUserDataBatch',
    data: BytesLike,
  ): Result;

  events: {};
}

export interface Abi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AbiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    AAVE_PRICE_FEED(overrides?: CallOverrides): Promise<[string]>;

    ETH_USD_PRICE_FEED(overrides?: CallOverrides): Promise<[string]>;

    STAKED_AAVE(overrides?: CallOverrides): Promise<[string]>;

    getStakedAssetData(
      stakedAsset: string,
      oracleAddress: string,
      overrides?: CallOverrides,
    ): Promise<[IStakedTokenDataProvider.StakedTokenDataStructOutput]>;

    getStakedAssetDataBatch(
      stakedTokens: string[],
      oracleAddresses: string[],
      overrides?: CallOverrides,
    ): Promise<
      [IStakedTokenDataProvider.StakedTokenDataStructOutput[], BigNumber]
    >;

    getStakedUserData(
      stakedAsset: string,
      oracleAddress: string,
      user: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        IStakedTokenDataProvider.StakedTokenDataStructOutput,
        IStakedTokenDataProvider.StakedTokenUserDataStructOutput,
      ]
    >;

    getStakedUserDataBatch(
      stakedTokens: string[],
      oracleAddresses: string[],
      userAddress: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        IStakedTokenDataProvider.StakedTokenDataStructOutput[],
        IStakedTokenDataProvider.StakedTokenUserDataStructOutput[],
      ]
    >;
  };

  AAVE_PRICE_FEED(overrides?: CallOverrides): Promise<string>;

  ETH_USD_PRICE_FEED(overrides?: CallOverrides): Promise<string>;

  STAKED_AAVE(overrides?: CallOverrides): Promise<string>;

  getStakedAssetData(
    stakedAsset: string,
    oracleAddress: string,
    overrides?: CallOverrides,
  ): Promise<IStakedTokenDataProvider.StakedTokenDataStructOutput>;

  getStakedAssetDataBatch(
    stakedTokens: string[],
    oracleAddresses: string[],
    overrides?: CallOverrides,
  ): Promise<
    [IStakedTokenDataProvider.StakedTokenDataStructOutput[], BigNumber]
  >;

  getStakedUserData(
    stakedAsset: string,
    oracleAddress: string,
    user: string,
    overrides?: CallOverrides,
  ): Promise<
    [
      IStakedTokenDataProvider.StakedTokenDataStructOutput,
      IStakedTokenDataProvider.StakedTokenUserDataStructOutput,
    ]
  >;

  getStakedUserDataBatch(
    stakedTokens: string[],
    oracleAddresses: string[],
    userAddress: string,
    overrides?: CallOverrides,
  ): Promise<
    [
      IStakedTokenDataProvider.StakedTokenDataStructOutput[],
      IStakedTokenDataProvider.StakedTokenUserDataStructOutput[],
    ]
  >;

  callStatic: {
    AAVE_PRICE_FEED(overrides?: CallOverrides): Promise<string>;

    ETH_USD_PRICE_FEED(overrides?: CallOverrides): Promise<string>;

    STAKED_AAVE(overrides?: CallOverrides): Promise<string>;

    getStakedAssetData(
      stakedAsset: string,
      oracleAddress: string,
      overrides?: CallOverrides,
    ): Promise<IStakedTokenDataProvider.StakedTokenDataStructOutput>;

    getStakedAssetDataBatch(
      stakedTokens: string[],
      oracleAddresses: string[],
      overrides?: CallOverrides,
    ): Promise<
      [IStakedTokenDataProvider.StakedTokenDataStructOutput[], BigNumber]
    >;

    getStakedUserData(
      stakedAsset: string,
      oracleAddress: string,
      user: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        IStakedTokenDataProvider.StakedTokenDataStructOutput,
        IStakedTokenDataProvider.StakedTokenUserDataStructOutput,
      ]
    >;

    getStakedUserDataBatch(
      stakedTokens: string[],
      oracleAddresses: string[],
      userAddress: string,
      overrides?: CallOverrides,
    ): Promise<
      [
        IStakedTokenDataProvider.StakedTokenDataStructOutput[],
        IStakedTokenDataProvider.StakedTokenUserDataStructOutput[],
      ]
    >;
  };

  filters: {};

  estimateGas: {
    AAVE_PRICE_FEED(overrides?: CallOverrides): Promise<BigNumber>;

    ETH_USD_PRICE_FEED(overrides?: CallOverrides): Promise<BigNumber>;

    STAKED_AAVE(overrides?: CallOverrides): Promise<BigNumber>;

    getStakedAssetData(
      stakedAsset: string,
      oracleAddress: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getStakedAssetDataBatch(
      stakedTokens: string[],
      oracleAddresses: string[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getStakedUserData(
      stakedAsset: string,
      oracleAddress: string,
      user: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getStakedUserDataBatch(
      stakedTokens: string[],
      oracleAddresses: string[],
      userAddress: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AAVE_PRICE_FEED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ETH_USD_PRICE_FEED(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    STAKED_AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakedAssetData(
      stakedAsset: string,
      oracleAddress: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getStakedAssetDataBatch(
      stakedTokens: string[],
      oracleAddresses: string[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getStakedUserData(
      stakedAsset: string,
      oracleAddress: string,
      user: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getStakedUserDataBatch(
      stakedTokens: string[],
      oracleAddresses: string[],
      userAddress: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
