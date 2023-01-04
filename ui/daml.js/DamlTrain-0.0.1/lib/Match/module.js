"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Account = require('../Account/module');
var Asset = require('../Asset/module');


exports.Create_Bet = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.BetAgreement = damlTypes.assembleTemplate(
{
  templateId: '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:BetAgreement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).decoder, bettor1: damlTypes.Party.decoder, bettor2: damlTypes.Party.decoder, bookie: damlTypes.Party.decoder, bettor1Amount: damlTypes.Numeric(10).decoder, bettor1Pick: damlTypes.Text.decoder, bettor1AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder, bettor2AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder, bettor1TransferCid: damlTypes.ContractId(Asset.AssetTransfer).decoder, bettor2TransferCid: damlTypes.Optional(damlTypes.ContractId(Asset.AssetTransfer)).decoder, gamblersUnion: Account.GamblersUnion.decoder, matchAdmin: damlTypes.Party.decoder, competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text).decoder, time: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).encode(__typed__.odds),
    bettor1: damlTypes.Party.encode(__typed__.bettor1),
    bettor2: damlTypes.Party.encode(__typed__.bettor2),
    bookie: damlTypes.Party.encode(__typed__.bookie),
    bettor1Amount: damlTypes.Numeric(10).encode(__typed__.bettor1Amount),
    bettor1Pick: damlTypes.Text.encode(__typed__.bettor1Pick),
    bettor1AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__.bettor1AssetCids),
    bettor2AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__.bettor2AssetCids),
    bettor1TransferCid: damlTypes.ContractId(Asset.AssetTransfer).encode(__typed__.bettor1TransferCid),
    bettor2TransferCid: damlTypes.Optional(damlTypes.ContractId(Asset.AssetTransfer)).encode(__typed__.bettor2TransferCid),
    gamblersUnion: Account.GamblersUnion.encode(__typed__.gamblersUnion),
    matchAdmin: damlTypes.Party.encode(__typed__.matchAdmin),
    competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text).encode(__typed__.competitors),
    time: damlTypes.Time.encode(__typed__.time),
  };
}
,
  Create_Bet: {
    template: function () { return exports.BetAgreement; },
    choiceName: 'Create_Bet',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Create_Bet.decoder; }),
    argumentEncode: function (__typed__) { return exports.Create_Bet.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Bet).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Bet).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.BetAgreement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.BetAgreement);



exports.AcceptBetProposal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({bettor2AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder, }); }),
  encode: function (__typed__) {
  return {
    bettor2AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__.bettor2AssetCids),
  };
}
,
};



exports.BetProposal = damlTypes.assembleTemplate(
{
  templateId: '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:BetProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({betAgreement: exports.BetAgreement.decoder, }); }),
  encode: function (__typed__) {
  return {
    betAgreement: exports.BetAgreement.encode(__typed__.betAgreement),
  };
}
,
  AcceptBetProposal: {
    template: function () { return exports.BetProposal; },
    choiceName: 'AcceptBetProposal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptBetProposal.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptBetProposal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.BetAgreement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.BetAgreement).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.BetProposal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.BetProposal);



exports.Settle_Bet = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Bet = damlTypes.assembleTemplate(
{
  templateId: '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:Bet',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).decoder, bettor1: damlTypes.Party.decoder, bettor2: damlTypes.Party.decoder, bookie: damlTypes.Party.decoder, bettor1Amount: damlTypes.Numeric(10).decoder, bettor1Pick: damlTypes.Text.decoder, bettor1AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder, bettor2AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder, bettor1TransferCid: damlTypes.ContractId(Asset.AssetTransfer).decoder, bettor2TransferCid: damlTypes.Optional(damlTypes.ContractId(Asset.AssetTransfer)).decoder, gamblersUnion: Account.GamblersUnion.decoder, matchAdmin: damlTypes.Party.decoder, competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text).decoder, time: damlTypes.Time.decoder, }); }),
  encode: function (__typed__) {
  return {
    odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).encode(__typed__.odds),
    bettor1: damlTypes.Party.encode(__typed__.bettor1),
    bettor2: damlTypes.Party.encode(__typed__.bettor2),
    bookie: damlTypes.Party.encode(__typed__.bookie),
    bettor1Amount: damlTypes.Numeric(10).encode(__typed__.bettor1Amount),
    bettor1Pick: damlTypes.Text.encode(__typed__.bettor1Pick),
    bettor1AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__.bettor1AssetCids),
    bettor2AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__.bettor2AssetCids),
    bettor1TransferCid: damlTypes.ContractId(Asset.AssetTransfer).encode(__typed__.bettor1TransferCid),
    bettor2TransferCid: damlTypes.Optional(damlTypes.ContractId(Asset.AssetTransfer)).encode(__typed__.bettor2TransferCid),
    gamblersUnion: Account.GamblersUnion.encode(__typed__.gamblersUnion),
    matchAdmin: damlTypes.Party.encode(__typed__.matchAdmin),
    competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text).encode(__typed__.competitors),
    time: damlTypes.Time.encode(__typed__.time),
  };
}
,
  Settle_Bet: {
    template: function () { return exports.Bet; },
    choiceName: 'Settle_Bet',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Settle_Bet.decoder; }),
    argumentEncode: function (__typed__) { return exports.Settle_Bet.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Bet; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Bet);



exports.SettleBets = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Create_Bet_Proposal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({bettor1Odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).decoder, bettor1: damlTypes.Party.decoder, bettor2: damlTypes.Party.decoder, bettor1Amount: damlTypes.Numeric(10).decoder, bettor1Pick: damlTypes.Text.decoder, bettor1AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder, }); }),
  encode: function (__typed__) {
  return {
    bettor1Odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).encode(__typed__.bettor1Odds),
    bettor1: damlTypes.Party.encode(__typed__.bettor1),
    bettor2: damlTypes.Party.encode(__typed__.bettor2),
    bettor1Amount: damlTypes.Numeric(10).encode(__typed__.bettor1Amount),
    bettor1Pick: damlTypes.Text.encode(__typed__.bettor1Pick),
    bettor1AssetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__.bettor1AssetCids),
  };
}
,
};



exports.BetSlip = damlTypes.assembleTemplate(
{
  templateId: '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:BetSlip',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple4(damlTypes.Party, damlTypes.Party, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text), damlTypes.Time).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple4(damlTypes.Party, damlTypes.Party, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text), damlTypes.Time).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({admin: damlTypes.Party.decoder, bookie: damlTypes.Party.decoder, competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text).decoder, odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).decoder, time: damlTypes.Time.decoder, bettors: damlTypes.List(damlTypes.Party).decoder, gamblersUnion: Account.GamblersUnion.decoder, betCids: damlTypes.List(damlTypes.ContractId(exports.Bet)).decoder, }); }),
  encode: function (__typed__) {
  return {
    admin: damlTypes.Party.encode(__typed__.admin),
    bookie: damlTypes.Party.encode(__typed__.bookie),
    competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text).encode(__typed__.competitors),
    odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).encode(__typed__.odds),
    time: damlTypes.Time.encode(__typed__.time),
    bettors: damlTypes.List(damlTypes.Party).encode(__typed__.bettors),
    gamblersUnion: Account.GamblersUnion.encode(__typed__.gamblersUnion),
    betCids: damlTypes.List(damlTypes.ContractId(exports.Bet)).encode(__typed__.betCids),
  };
}
,
  Create_Bet_Proposal: {
    template: function () { return exports.BetSlip; },
    choiceName: 'Create_Bet_Proposal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Create_Bet_Proposal.decoder; }),
    argumentEncode: function (__typed__) { return exports.Create_Bet_Proposal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.BetProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.BetProposal).encode(__typed__); },
  },
  SettleBets: {
    template: function () { return exports.BetSlip; },
    choiceName: 'SettleBets',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SettleBets.decoder; }),
    argumentEncode: function (__typed__) { return exports.SettleBets.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.BetSlip; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.BetSlip);



exports.SettleMatch = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({victor: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    victor: damlTypes.Text.encode(__typed__.victor),
  };
}
,
};



exports.CreateBetSlip = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).decoder, bookie: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    odds: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Text, damlTypes.Numeric(10), damlTypes.Numeric(10))).encode(__typed__.odds),
    bookie: damlTypes.Party.encode(__typed__.bookie),
  };
}
,
};



exports.Match = damlTypes.assembleTemplate(
{
  templateId: '0edfd44f07e5f52a30677100646c62561ba9a47abbe28a5190f6ed61d7e7865b:Match:Match',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Party, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text), damlTypes.Time).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Party, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text), damlTypes.Time).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({admin: damlTypes.Party.decoder, gamblersUnion: Account.GamblersUnion.decoder, competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text).decoder, time: damlTypes.Time.decoder, winner: damlTypes.Optional(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    admin: damlTypes.Party.encode(__typed__.admin),
    gamblersUnion: Account.GamblersUnion.encode(__typed__.gamblersUnion),
    competitors: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Text, damlTypes.Text).encode(__typed__.competitors),
    time: damlTypes.Time.encode(__typed__.time),
    winner: damlTypes.Optional(damlTypes.Text).encode(__typed__.winner),
  };
}
,
  SettleMatch: {
    template: function () { return exports.Match; },
    choiceName: 'SettleMatch',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SettleMatch.decoder; }),
    argumentEncode: function (__typed__) { return exports.SettleMatch.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Match).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Match).encode(__typed__); },
  },
  CreateBetSlip: {
    template: function () { return exports.Match; },
    choiceName: 'CreateBetSlip',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateBetSlip.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateBetSlip.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.BetSlip).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.BetSlip).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Match; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Match);

