// Generated from Match.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Account from '../Account/module';
import * as Asset from '../Asset/module';

export declare type Create_Bet = {
};

export declare const Create_Bet:
  damlTypes.Serializable<Create_Bet> & {
  }
;


export declare type BetAgreement = {
  odds: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<string, damlTypes.Numeric, damlTypes.Numeric>[];
  bettor1: damlTypes.Party;
  bettor2: damlTypes.Party;
  bookie: damlTypes.Party;
  bettor1Amount: damlTypes.Numeric;
  bettor1Pick: string;
  bettor1AssetCids: damlTypes.ContractId<Asset.Asset>[];
  bettor2AssetCids: damlTypes.ContractId<Asset.Asset>[];
  bettor1TransferCid: damlTypes.ContractId<Asset.AssetTransfer>;
  bettor2TransferCid: damlTypes.Optional<damlTypes.ContractId<Asset.AssetTransfer>>;
  gamblersUnion: Account.GamblersUnion;
  matchAdmin: damlTypes.Party;
  competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, string>;
  time: damlTypes.Time;
};

export declare interface BetAgreementInterface {
  Create_Bet: damlTypes.Choice<BetAgreement, Create_Bet, damlTypes.ContractId<Bet>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BetAgreement, undefined>>;
  Archive: damlTypes.Choice<BetAgreement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BetAgreement, undefined>>;
}
export declare const BetAgreement:
  damlTypes.Template<BetAgreement, undefined, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:BetAgreement'> &
  damlTypes.ToInterface<BetAgreement, never> &
  BetAgreementInterface;

export declare namespace BetAgreement {
  export type CreateEvent = damlLedger.CreateEvent<BetAgreement, undefined, typeof BetAgreement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<BetAgreement, typeof BetAgreement.templateId>
  export type Event = damlLedger.Event<BetAgreement, undefined, typeof BetAgreement.templateId>
  export type QueryResult = damlLedger.QueryResult<BetAgreement, undefined, typeof BetAgreement.templateId>
}



export declare type AcceptBetProposal = {
  bettor2AssetCids: damlTypes.ContractId<Asset.Asset>[];
};

export declare const AcceptBetProposal:
  damlTypes.Serializable<AcceptBetProposal> & {
  }
;


export declare type BetProposal = {
  betAgreement: BetAgreement;
};

export declare interface BetProposalInterface {
  AcceptBetProposal: damlTypes.Choice<BetProposal, AcceptBetProposal, damlTypes.ContractId<BetAgreement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BetProposal, undefined>>;
  Archive: damlTypes.Choice<BetProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<BetProposal, undefined>>;
}
export declare const BetProposal:
  damlTypes.Template<BetProposal, undefined, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:BetProposal'> &
  damlTypes.ToInterface<BetProposal, never> &
  BetProposalInterface;

export declare namespace BetProposal {
  export type CreateEvent = damlLedger.CreateEvent<BetProposal, undefined, typeof BetProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<BetProposal, typeof BetProposal.templateId>
  export type Event = damlLedger.Event<BetProposal, undefined, typeof BetProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<BetProposal, undefined, typeof BetProposal.templateId>
}



export declare type Settle_Bet = {
};

export declare const Settle_Bet:
  damlTypes.Serializable<Settle_Bet> & {
  }
;


export declare type Bet = {
  odds: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<string, damlTypes.Numeric, damlTypes.Numeric>[];
  bettor1: damlTypes.Party;
  bettor2: damlTypes.Party;
  bookie: damlTypes.Party;
  bettor1Amount: damlTypes.Numeric;
  bettor1Pick: string;
  bettor1AssetCids: damlTypes.ContractId<Asset.Asset>[];
  bettor2AssetCids: damlTypes.ContractId<Asset.Asset>[];
  bettor1TransferCid: damlTypes.ContractId<Asset.AssetTransfer>;
  bettor2TransferCid: damlTypes.Optional<damlTypes.ContractId<Asset.AssetTransfer>>;
  gamblersUnion: Account.GamblersUnion;
  matchAdmin: damlTypes.Party;
  competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, string>;
  time: damlTypes.Time;
};

export declare interface BetInterface {
  Settle_Bet: damlTypes.Choice<Bet, Settle_Bet, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Bet, undefined>>;
  Archive: damlTypes.Choice<Bet, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Bet, undefined>>;
}
export declare const Bet:
  damlTypes.Template<Bet, undefined, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:Bet'> &
  damlTypes.ToInterface<Bet, never> &
  BetInterface;

export declare namespace Bet {
  export type CreateEvent = damlLedger.CreateEvent<Bet, undefined, typeof Bet.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Bet, typeof Bet.templateId>
  export type Event = damlLedger.Event<Bet, undefined, typeof Bet.templateId>
  export type QueryResult = damlLedger.QueryResult<Bet, undefined, typeof Bet.templateId>
}



export declare type SettleBets = {
};

export declare const SettleBets:
  damlTypes.Serializable<SettleBets> & {
  }
;


export declare type Create_Bet_Proposal = {
  bettor1Odds: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<string, damlTypes.Numeric, damlTypes.Numeric>[];
  bettor1: damlTypes.Party;
  bettor2: damlTypes.Party;
  bettor1Amount: damlTypes.Numeric;
  bettor1Pick: string;
  bettor1AssetCids: damlTypes.ContractId<Asset.Asset>[];
};

export declare const Create_Bet_Proposal:
  damlTypes.Serializable<Create_Bet_Proposal> & {
  }
;


export declare type BetSlip = {
  admin: damlTypes.Party;
  bookie: damlTypes.Party;
  competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, string>;
  odds: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<string, damlTypes.Numeric, damlTypes.Numeric>[];
  time: damlTypes.Time;
  bettors: damlTypes.Party[];
  gamblersUnion: Account.GamblersUnion;
  betCids: damlTypes.ContractId<Bet>[];
};

export declare interface BetSlipInterface {
  Create_Bet_Proposal: damlTypes.Choice<BetSlip, Create_Bet_Proposal, damlTypes.ContractId<BetProposal>, BetSlip.Key> & damlTypes.ChoiceFrom<damlTypes.Template<BetSlip, BetSlip.Key>>;
  SettleBets: damlTypes.Choice<BetSlip, SettleBets, {}, BetSlip.Key> & damlTypes.ChoiceFrom<damlTypes.Template<BetSlip, BetSlip.Key>>;
  Archive: damlTypes.Choice<BetSlip, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, BetSlip.Key> & damlTypes.ChoiceFrom<damlTypes.Template<BetSlip, BetSlip.Key>>;
}
export declare const BetSlip:
  damlTypes.Template<BetSlip, BetSlip.Key, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:BetSlip'> &
  damlTypes.ToInterface<BetSlip, never> &
  BetSlipInterface;

export declare namespace BetSlip {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple4<damlTypes.Party, damlTypes.Party, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, string>, damlTypes.Time>
  export type CreateEvent = damlLedger.CreateEvent<BetSlip, BetSlip.Key, typeof BetSlip.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<BetSlip, typeof BetSlip.templateId>
  export type Event = damlLedger.Event<BetSlip, BetSlip.Key, typeof BetSlip.templateId>
  export type QueryResult = damlLedger.QueryResult<BetSlip, BetSlip.Key, typeof BetSlip.templateId>
}



export declare type SettleMatch = {
  victor: string;
};

export declare const SettleMatch:
  damlTypes.Serializable<SettleMatch> & {
  }
;


export declare type CreateBetSlip = {
  odds: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<string, damlTypes.Numeric, damlTypes.Numeric>[];
  bookie: damlTypes.Party;
};

export declare const CreateBetSlip:
  damlTypes.Serializable<CreateBetSlip> & {
  }
;


export declare type Match = {
  admin: damlTypes.Party;
  gamblersUnion: Account.GamblersUnion;
  competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, string>;
  time: damlTypes.Time;
  winner: damlTypes.Optional<string>;
};

export declare interface MatchInterface {
  SettleMatch: damlTypes.Choice<Match, SettleMatch, damlTypes.ContractId<Match>, Match.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Match, Match.Key>>;
  CreateBetSlip: damlTypes.Choice<Match, CreateBetSlip, damlTypes.ContractId<BetSlip>, Match.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Match, Match.Key>>;
  Archive: damlTypes.Choice<Match, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Match.Key> & damlTypes.ChoiceFrom<damlTypes.Template<Match, Match.Key>>;
}
export declare const Match:
  damlTypes.Template<Match, Match.Key, '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:Match'> &
  damlTypes.ToInterface<Match, never> &
  MatchInterface;

export declare namespace Match {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.Party, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<string, string>, damlTypes.Time>
  export type CreateEvent = damlLedger.CreateEvent<Match, Match.Key, typeof Match.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Match, typeof Match.templateId>
  export type Event = damlLedger.Event<Match, Match.Key, typeof Match.templateId>
  export type QueryResult = damlLedger.QueryResult<Match, Match.Key, typeof Match.templateId>
}


