// Generated from Asset.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Accept_Transfer = {
};

export declare const Accept_Transfer:
  damlTypes.Serializable<Accept_Transfer> & {
  }
;


export declare type Reject_Transfer = {
};

export declare const Reject_Transfer:
  damlTypes.Serializable<Reject_Transfer> & {
  }
;


export declare type Cancel_Transfer = {
};

export declare const Cancel_Transfer:
  damlTypes.Serializable<Cancel_Transfer> & {
  }
;


export declare type AssetTransfer = {
  asset: Asset;
  recipient: damlTypes.Party;
};

export declare interface AssetTransferInterface {
  Archive: damlTypes.Choice<AssetTransfer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AssetTransfer, undefined>>;
  Cancel_Transfer: damlTypes.Choice<AssetTransfer, Cancel_Transfer, damlTypes.ContractId<Asset>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AssetTransfer, undefined>>;
  Reject_Transfer: damlTypes.Choice<AssetTransfer, Reject_Transfer, damlTypes.ContractId<Asset>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AssetTransfer, undefined>>;
  Accept_Transfer: damlTypes.Choice<AssetTransfer, Accept_Transfer, damlTypes.ContractId<Asset>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<AssetTransfer, undefined>>;
}
export declare const AssetTransfer:
  damlTypes.Template<AssetTransfer, undefined, '918474ccb8dad25d4452a192455e1c0d43c191a9964c7646b72298c136ebc850:Asset:AssetTransfer'> &
  damlTypes.ToInterface<AssetTransfer, never> &
  AssetTransferInterface;

export declare namespace AssetTransfer {
  export type CreateEvent = damlLedger.CreateEvent<AssetTransfer, undefined, typeof AssetTransfer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<AssetTransfer, typeof AssetTransfer.templateId>
  export type Event = damlLedger.Event<AssetTransfer, undefined, typeof AssetTransfer.templateId>
  export type QueryResult = damlLedger.QueryResult<AssetTransfer, undefined, typeof AssetTransfer.templateId>
}



export declare type Asset = {
  assetType: AssetType;
  owner: damlTypes.Party;
  amount: damlTypes.Numeric;
};

export declare interface AssetInterface {
  Archive: damlTypes.Choice<Asset, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Asset, undefined>>;
}
export declare const Asset:
  damlTypes.Template<Asset, undefined, '918474ccb8dad25d4452a192455e1c0d43c191a9964c7646b72298c136ebc850:Asset:Asset'> &
  damlTypes.ToInterface<Asset, never> &
  AssetInterface;

export declare namespace Asset {
  export type CreateEvent = damlLedger.CreateEvent<Asset, undefined, typeof Asset.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Asset, typeof Asset.templateId>
  export type Event = damlLedger.Event<Asset, undefined, typeof Asset.templateId>
  export type QueryResult = damlLedger.QueryResult<Asset, undefined, typeof Asset.templateId>
}



export declare type AssetType = {
  issuer: damlTypes.Party;
  symbol: string;
};

export declare const AssetType:
  damlTypes.Serializable<AssetType> & {
  }
;

