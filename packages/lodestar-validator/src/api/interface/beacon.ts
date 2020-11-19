import {
  BLSPubkey,
  Fork,
  Genesis,
  ValidatorIndex,
  ValidatorResponse,
  SignedBeaconBlock,
} from "@chainsafe/lodestar-types";

export interface IBeaconApi {
  state: IBeaconStateApi;
  blocks: IBeaconBlocksApi;

  getGenesis(): Promise<Genesis | null>;
}

export interface IBeaconStateApi {
  getFork(stateId: "head"): Promise<Fork | null>;
  getStateValidator(stateId: "head", validatorId: ValidatorIndex | BLSPubkey): Promise<ValidatorResponse | null>;
}

export interface IBeaconBlocksApi {
  publishBlock(block: SignedBeaconBlock): Promise<void>;
}
