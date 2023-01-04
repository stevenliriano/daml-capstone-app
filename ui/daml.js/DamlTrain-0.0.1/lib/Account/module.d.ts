// Generated from Account.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Asset from '../Asset/module';

export declare type Create_Gambling_Account = {
};

export declare const Create_Gambling_Account:
  damlTypes.Serializable<Create_Gambling_Account> & {
  }
;


export declare type GamblingAccountAgreement = {
  assetType: Asset.AssetType;
  bookie: damlTypes.Party;
  owner: damlTypes.Party;
};

export declare interface GamblingAccountAgreementInterface {
  Archive: damlTypes.Choice<GamblingAccountAgreement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccountAgreement, undefined>>;
  Create_Gambling_Account: damlTypes.Choice<GamblingAccountAgreement, Create_Gambling_Account, damlTypes.ContractId<GamblingAccount>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccountAgreement, undefined>>;
}
export declare const GamblingAccountAgreement:
  damlTypes.Template<GamblingAccountAgreement, undefined, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Account:GamblingAccountAgreement'> &
  damlTypes.ToInterface<GamblingAccountAgreement, never> &
  GamblingAccountAgreementInterface;

export declare namespace GamblingAccountAgreement {
  export type CreateEvent = damlLedger.CreateEvent<GamblingAccountAgreement, undefined, typeof GamblingAccountAgreement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GamblingAccountAgreement, typeof GamblingAccountAgreement.templateId>
  export type Event = damlLedger.Event<GamblingAccountAgreement, undefined, typeof GamblingAccountAgreement.templateId>
  export type QueryResult = damlLedger.QueryResult<GamblingAccountAgreement, undefined, typeof GamblingAccountAgreement.templateId>
}



export declare type AcceptGamblingAccountProposal = {
};

export declare const AcceptGamblingAccountProposal:
  damlTypes.Serializable<AcceptGamblingAccountProposal> & {
  }
;


export declare type GamblingAccountProposal = {
  gamblingAccountAgreement: GamblingAccountAgreement;
};

export declare interface GamblingAccountProposalInterface {
  AcceptGamblingAccountProposal: damlTypes.Choice<GamblingAccountProposal, AcceptGamblingAccountProposal, damlTypes.ContractId<GamblingAccountAgreement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccountProposal, undefined>>;
  Archive: damlTypes.Choice<GamblingAccountProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccountProposal, undefined>>;
}
export declare const GamblingAccountProposal:
  damlTypes.Template<GamblingAccountProposal, undefined, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Account:GamblingAccountProposal'> &
  damlTypes.ToInterface<GamblingAccountProposal, never> &
  GamblingAccountProposalInterface;

export declare namespace GamblingAccountProposal {
  export type CreateEvent = damlLedger.CreateEvent<GamblingAccountProposal, undefined, typeof GamblingAccountProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GamblingAccountProposal, typeof GamblingAccountProposal.templateId>
  export type Event = damlLedger.Event<GamblingAccountProposal, undefined, typeof GamblingAccountProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<GamblingAccountProposal, undefined, typeof GamblingAccountProposal.templateId>
}



export declare type Deposit_Transfer_Into_Account = {
  transferCid: damlTypes.ContractId<Asset.AssetTransfer>;
};

export declare const Deposit_Transfer_Into_Account:
  damlTypes.Serializable<Deposit_Transfer_Into_Account> & {
  }
;


export declare type Create_Transfer = {
  assetCids: damlTypes.ContractId<Asset.Asset>[];
  transfer: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Numeric, damlTypes.Party>;
};

export declare const Create_Transfer:
  damlTypes.Serializable<Create_Transfer> & {
  }
;


export declare type Create_Transfers = {
  assetCids: damlTypes.ContractId<Asset.Asset>[];
  transfers: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Numeric, damlTypes.Party>[];
};

export declare const Create_Transfers:
  damlTypes.Serializable<Create_Transfers> & {
  }
;


export declare type Merge_Split = {
  assetCids: damlTypes.ContractId<Asset.Asset>[];
  outputAmounts: damlTypes.Numeric[];
};

export declare const Merge_Split:
  damlTypes.Serializable<Merge_Split> & {
  }
;


export declare type Invite_New_Owner = {
  newBettor: damlTypes.Party;
};

export declare const Invite_New_Owner:
  damlTypes.Serializable<Invite_New_Owner> & {
  }
;


export declare type GamblingAccount = {
  assetType: Asset.AssetType;
  bookie: damlTypes.Party;
  owner: damlTypes.Party;
};

export declare interface GamblingAccountInterface {
  Create_Transfer: damlTypes.Choice<GamblingAccount, Create_Transfer, damlTypes.ContractId<Asset.AssetTransfer>, GamblingAccount.Key> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccount, GamblingAccount.Key>>;
  Create_Transfers: damlTypes.Choice<GamblingAccount, Create_Transfers, {}, GamblingAccount.Key> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccount, GamblingAccount.Key>>;
  Merge_Split: damlTypes.Choice<GamblingAccount, Merge_Split, damlTypes.ContractId<Asset.Asset>[], GamblingAccount.Key> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccount, GamblingAccount.Key>>;
  Invite_New_Owner: damlTypes.Choice<GamblingAccount, Invite_New_Owner, damlTypes.ContractId<GamblingAccountProposal>, GamblingAccount.Key> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccount, GamblingAccount.Key>>;
  Deposit_Transfer_Into_Account: damlTypes.Choice<GamblingAccount, Deposit_Transfer_Into_Account, damlTypes.ContractId<Asset.Asset>, GamblingAccount.Key> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccount, GamblingAccount.Key>>;
  Archive: damlTypes.Choice<GamblingAccount, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, GamblingAccount.Key> & damlTypes.ChoiceFrom<damlTypes.Template<GamblingAccount, GamblingAccount.Key>>;
}
export declare const GamblingAccount:
  damlTypes.Template<GamblingAccount, GamblingAccount.Key, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Account:GamblingAccount'> &
  damlTypes.ToInterface<GamblingAccount, never> &
  GamblingAccountInterface;

export declare namespace GamblingAccount {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<Asset.AssetType, damlTypes.Party, damlTypes.Party>
  export type CreateEvent = damlLedger.CreateEvent<GamblingAccount, GamblingAccount.Key, typeof GamblingAccount.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GamblingAccount, typeof GamblingAccount.templateId>
  export type Event = damlLedger.Event<GamblingAccount, GamblingAccount.Key, typeof GamblingAccount.templateId>
  export type QueryResult = damlLedger.QueryResult<GamblingAccount, GamblingAccount.Key, typeof GamblingAccount.templateId>
}



export declare type Create_House = {
};

export declare const Create_House:
  damlTypes.Serializable<Create_House> & {
  }
;


export declare type HouseAgreement = {
  assetType: Asset.AssetType;
  bookie: damlTypes.Party;
};

export declare interface HouseAgreementInterface {
  Create_House: damlTypes.Choice<HouseAgreement, Create_House, damlTypes.ContractId<House>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HouseAgreement, undefined>>;
  Archive: damlTypes.Choice<HouseAgreement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HouseAgreement, undefined>>;
}
export declare const HouseAgreement:
  damlTypes.Template<HouseAgreement, undefined, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Account:HouseAgreement'> &
  damlTypes.ToInterface<HouseAgreement, never> &
  HouseAgreementInterface;

export declare namespace HouseAgreement {
  export type CreateEvent = damlLedger.CreateEvent<HouseAgreement, undefined, typeof HouseAgreement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HouseAgreement, typeof HouseAgreement.templateId>
  export type Event = damlLedger.Event<HouseAgreement, undefined, typeof HouseAgreement.templateId>
  export type QueryResult = damlLedger.QueryResult<HouseAgreement, undefined, typeof HouseAgreement.templateId>
}



export declare type HouseProposal_Accept = {
};

export declare const HouseProposal_Accept:
  damlTypes.Serializable<HouseProposal_Accept> & {
  }
;


export declare type HouseProposal = {
  houseAgreement: HouseAgreement;
};

export declare interface HouseProposalInterface {
  HouseProposal_Accept: damlTypes.Choice<HouseProposal, HouseProposal_Accept, damlTypes.ContractId<HouseAgreement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HouseProposal, undefined>>;
  Archive: damlTypes.Choice<HouseProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<HouseProposal, undefined>>;
}
export declare const HouseProposal:
  damlTypes.Template<HouseProposal, undefined, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Account:HouseProposal'> &
  damlTypes.ToInterface<HouseProposal, never> &
  HouseProposalInterface;

export declare namespace HouseProposal {
  export type CreateEvent = damlLedger.CreateEvent<HouseProposal, undefined, typeof HouseProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<HouseProposal, typeof HouseProposal.templateId>
  export type Event = damlLedger.Event<HouseProposal, undefined, typeof HouseProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<HouseProposal, undefined, typeof HouseProposal.templateId>
}



export declare type Deposit_House_Fees = {
  transferCids: damlTypes.ContractId<Asset.AssetTransfer>[];
};

export declare const Deposit_House_Fees:
  damlTypes.Serializable<Deposit_House_Fees> & {
  }
;


export declare type AddBettor = {
  newBettor: damlTypes.Party;
};

export declare const AddBettor:
  damlTypes.Serializable<AddBettor> & {
  }
;


export declare type House = {
  bookie: damlTypes.Party;
  assetType: Asset.AssetType;
  registeredBettors: damlTypes.Party[];
};

export declare interface HouseInterface {
  AddBettor: damlTypes.Choice<House, AddBettor, damlTypes.ContractId<House>, House.Key> & damlTypes.ChoiceFrom<damlTypes.Template<House, House.Key>>;
  Deposit_House_Fees: damlTypes.Choice<House, Deposit_House_Fees, {}, House.Key> & damlTypes.ChoiceFrom<damlTypes.Template<House, House.Key>>;
  Archive: damlTypes.Choice<House, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, House.Key> & damlTypes.ChoiceFrom<damlTypes.Template<House, House.Key>>;
}
export declare const House:
  damlTypes.Template<House, House.Key, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Account:House'> &
  damlTypes.ToInterface<House, never> &
  HouseInterface;

export declare namespace House {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.Party, Asset.AssetType>
  export type CreateEvent = damlLedger.CreateEvent<House, House.Key, typeof House.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<House, typeof House.templateId>
  export type Event = damlLedger.Event<House, House.Key, typeof House.templateId>
  export type QueryResult = damlLedger.QueryResult<House, House.Key, typeof House.templateId>
}



export declare type AddBookie = {
  newBookie: damlTypes.Party;
};

export declare const AddBookie:
  damlTypes.Serializable<AddBookie> & {
  }
;


export declare type Create_House_Proposal = {
  newBookie: damlTypes.Party;
};

export declare const Create_House_Proposal:
  damlTypes.Serializable<Create_House_Proposal> & {
  }
;


export declare type GamblersUnion = {
  assetType: Asset.AssetType;
  registeredBookies: damlTypes.Party[];
};

export declare interface GamblersUnionInterface {
  Create_House_Proposal: damlTypes.Choice<GamblersUnion, Create_House_Proposal, damlTypes.ContractId<HouseProposal>, GamblersUnion.Key> & damlTypes.ChoiceFrom<damlTypes.Template<GamblersUnion, GamblersUnion.Key>>;
  AddBookie: damlTypes.Choice<GamblersUnion, AddBookie, damlTypes.ContractId<GamblersUnion>, GamblersUnion.Key> & damlTypes.ChoiceFrom<damlTypes.Template<GamblersUnion, GamblersUnion.Key>>;
  Archive: damlTypes.Choice<GamblersUnion, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, GamblersUnion.Key> & damlTypes.ChoiceFrom<damlTypes.Template<GamblersUnion, GamblersUnion.Key>>;
}
export declare const GamblersUnion:
  damlTypes.Template<GamblersUnion, GamblersUnion.Key, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Account:GamblersUnion'> &
  damlTypes.ToInterface<GamblersUnion, never> &
  GamblersUnionInterface;

export declare namespace GamblersUnion {
  export type Key = Asset.AssetType
  export type CreateEvent = damlLedger.CreateEvent<GamblersUnion, GamblersUnion.Key, typeof GamblersUnion.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GamblersUnion, typeof GamblersUnion.templateId>
  export type Event = damlLedger.Event<GamblersUnion, GamblersUnion.Key, typeof GamblersUnion.templateId>
  export type QueryResult = damlLedger.QueryResult<GamblersUnion, GamblersUnion.Key, typeof GamblersUnion.templateId>
}


