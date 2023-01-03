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

var Asset = require('../Asset/module');


exports.Create_Gambling_Account = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.GamblingAccountAgreement = damlTypes.assembleTemplate(
{
  templateId: '918474ccb8dad25d4452a192455e1c0d43c191a9964c7646b72298c136ebc850:Account:GamblingAccountAgreement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetType: Asset.AssetType.decoder, bookie: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    assetType: Asset.AssetType.encode(__typed__.assetType),
    bookie: damlTypes.Party.encode(__typed__.bookie),
    owner: damlTypes.Party.encode(__typed__.owner),
  };
}
,
  Archive: {
    template: function () { return exports.GamblingAccountAgreement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Create_Gambling_Account: {
    template: function () { return exports.GamblingAccountAgreement; },
    choiceName: 'Create_Gambling_Account',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Create_Gambling_Account.decoder; }),
    argumentEncode: function (__typed__) { return exports.Create_Gambling_Account.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GamblingAccount).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GamblingAccount).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.GamblingAccountAgreement);



exports.AcceptGamblingAccountProposal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.GamblingAccountProposal = damlTypes.assembleTemplate(
{
  templateId: '918474ccb8dad25d4452a192455e1c0d43c191a9964c7646b72298c136ebc850:Account:GamblingAccountProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({gamblingAccountAgreement: exports.GamblingAccountAgreement.decoder, }); }),
  encode: function (__typed__) {
  return {
    gamblingAccountAgreement: exports.GamblingAccountAgreement.encode(__typed__.gamblingAccountAgreement),
  };
}
,
  AcceptGamblingAccountProposal: {
    template: function () { return exports.GamblingAccountProposal; },
    choiceName: 'AcceptGamblingAccountProposal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptGamblingAccountProposal.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptGamblingAccountProposal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GamblingAccountAgreement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GamblingAccountAgreement).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.GamblingAccountProposal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.GamblingAccountProposal);



exports.Deposit_Transfer_Into_Account = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({transferCid: damlTypes.ContractId(Asset.AssetTransfer).decoder, }); }),
  encode: function (__typed__) {
  return {
    transferCid: damlTypes.ContractId(Asset.AssetTransfer).encode(__typed__.transferCid),
  };
}
,
};



exports.Create_Transfer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder, transfer: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Numeric(10), damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    assetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__.assetCids),
    transfer: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Numeric(10), damlTypes.Party).encode(__typed__.transfer),
  };
}
,
};



exports.Create_Transfers = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder, transfers: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Numeric(10), damlTypes.Party)).decoder, }); }),
  encode: function (__typed__) {
  return {
    assetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__.assetCids),
    transfers: damlTypes.List(pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Numeric(10), damlTypes.Party)).encode(__typed__.transfers),
  };
}
,
};



exports.Merge_Split = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder, outputAmounts: damlTypes.List(damlTypes.Numeric(10)).decoder, }); }),
  encode: function (__typed__) {
  return {
    assetCids: damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__.assetCids),
    outputAmounts: damlTypes.List(damlTypes.Numeric(10)).encode(__typed__.outputAmounts),
  };
}
,
};



exports.Invite_New_Owner = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newBettor: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    newBettor: damlTypes.Party.encode(__typed__.newBettor),
  };
}
,
};



exports.GamblingAccount = damlTypes.assembleTemplate(
{
  templateId: '918474ccb8dad25d4452a192455e1c0d43c191a9964c7646b72298c136ebc850:Account:GamblingAccount',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(Asset.AssetType, damlTypes.Party, damlTypes.Party).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(Asset.AssetType, damlTypes.Party, damlTypes.Party).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetType: Asset.AssetType.decoder, bookie: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    assetType: Asset.AssetType.encode(__typed__.assetType),
    bookie: damlTypes.Party.encode(__typed__.bookie),
    owner: damlTypes.Party.encode(__typed__.owner),
  };
}
,
  Create_Transfer: {
    template: function () { return exports.GamblingAccount; },
    choiceName: 'Create_Transfer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Create_Transfer.decoder; }),
    argumentEncode: function (__typed__) { return exports.Create_Transfer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Asset.AssetTransfer).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Asset.AssetTransfer).encode(__typed__); },
  },
  Create_Transfers: {
    template: function () { return exports.GamblingAccount; },
    choiceName: 'Create_Transfers',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Create_Transfers.decoder; }),
    argumentEncode: function (__typed__) { return exports.Create_Transfers.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Merge_Split: {
    template: function () { return exports.GamblingAccount; },
    choiceName: 'Merge_Split',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Merge_Split.decoder; }),
    argumentEncode: function (__typed__) { return exports.Merge_Split.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.List(damlTypes.ContractId(Asset.Asset)).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.List(damlTypes.ContractId(Asset.Asset)).encode(__typed__); },
  },
  Invite_New_Owner: {
    template: function () { return exports.GamblingAccount; },
    choiceName: 'Invite_New_Owner',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Invite_New_Owner.decoder; }),
    argumentEncode: function (__typed__) { return exports.Invite_New_Owner.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GamblingAccountProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GamblingAccountProposal).encode(__typed__); },
  },
  Deposit_Transfer_Into_Account: {
    template: function () { return exports.GamblingAccount; },
    choiceName: 'Deposit_Transfer_Into_Account',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Deposit_Transfer_Into_Account.decoder; }),
    argumentEncode: function (__typed__) { return exports.Deposit_Transfer_Into_Account.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Asset.Asset).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Asset.Asset).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.GamblingAccount; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.GamblingAccount);



exports.Create_House = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.HouseAgreement = damlTypes.assembleTemplate(
{
  templateId: '918474ccb8dad25d4452a192455e1c0d43c191a9964c7646b72298c136ebc850:Account:HouseAgreement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetType: Asset.AssetType.decoder, bookie: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    assetType: Asset.AssetType.encode(__typed__.assetType),
    bookie: damlTypes.Party.encode(__typed__.bookie),
  };
}
,
  Create_House: {
    template: function () { return exports.HouseAgreement; },
    choiceName: 'Create_House',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Create_House.decoder; }),
    argumentEncode: function (__typed__) { return exports.Create_House.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.House).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.House).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.HouseAgreement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HouseAgreement);



exports.HouseProposal_Accept = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.HouseProposal = damlTypes.assembleTemplate(
{
  templateId: '918474ccb8dad25d4452a192455e1c0d43c191a9964c7646b72298c136ebc850:Account:HouseProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({houseAgreement: exports.HouseAgreement.decoder, }); }),
  encode: function (__typed__) {
  return {
    houseAgreement: exports.HouseAgreement.encode(__typed__.houseAgreement),
  };
}
,
  HouseProposal_Accept: {
    template: function () { return exports.HouseProposal; },
    choiceName: 'HouseProposal_Accept',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.HouseProposal_Accept.decoder; }),
    argumentEncode: function (__typed__) { return exports.HouseProposal_Accept.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.HouseAgreement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.HouseAgreement).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.HouseProposal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.HouseProposal);



exports.Deposit_House_Fees = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({transferCids: damlTypes.List(damlTypes.ContractId(Asset.AssetTransfer)).decoder, }); }),
  encode: function (__typed__) {
  return {
    transferCids: damlTypes.List(damlTypes.ContractId(Asset.AssetTransfer)).encode(__typed__.transferCids),
  };
}
,
};



exports.AddBettor = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newBettor: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    newBettor: damlTypes.Party.encode(__typed__.newBettor),
  };
}
,
};



exports.House = damlTypes.assembleTemplate(
{
  templateId: '918474ccb8dad25d4452a192455e1c0d43c191a9964c7646b72298c136ebc850:Account:House',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, Asset.AssetType).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, Asset.AssetType).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({bookie: damlTypes.Party.decoder, assetType: Asset.AssetType.decoder, registeredBettors: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    bookie: damlTypes.Party.encode(__typed__.bookie),
    assetType: Asset.AssetType.encode(__typed__.assetType),
    registeredBettors: damlTypes.List(damlTypes.Party).encode(__typed__.registeredBettors),
  };
}
,
  AddBettor: {
    template: function () { return exports.House; },
    choiceName: 'AddBettor',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddBettor.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddBettor.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.House).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.House).encode(__typed__); },
  },
  Deposit_House_Fees: {
    template: function () { return exports.House; },
    choiceName: 'Deposit_House_Fees',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Deposit_House_Fees.decoder; }),
    argumentEncode: function (__typed__) { return exports.Deposit_House_Fees.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.House; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.House);



exports.AddBookie = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newBookie: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    newBookie: damlTypes.Party.encode(__typed__.newBookie),
  };
}
,
};



exports.Create_House_Proposal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newBookie: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    newBookie: damlTypes.Party.encode(__typed__.newBookie),
  };
}
,
};



exports.GamblersUnion = damlTypes.assembleTemplate(
{
  templateId: '918474ccb8dad25d4452a192455e1c0d43c191a9964c7646b72298c136ebc850:Account:GamblersUnion',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return Asset.AssetType.decoder; }); }),
  keyEncode: function (__typed__) { return Asset.AssetType.encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({assetType: Asset.AssetType.decoder, registeredBookies: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    assetType: Asset.AssetType.encode(__typed__.assetType),
    registeredBookies: damlTypes.List(damlTypes.Party).encode(__typed__.registeredBookies),
  };
}
,
  Create_House_Proposal: {
    template: function () { return exports.GamblersUnion; },
    choiceName: 'Create_House_Proposal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Create_House_Proposal.decoder; }),
    argumentEncode: function (__typed__) { return exports.Create_House_Proposal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.HouseProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.HouseProposal).encode(__typed__); },
  },
  AddBookie: {
    template: function () { return exports.GamblersUnion; },
    choiceName: 'AddBookie',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AddBookie.decoder; }),
    argumentEncode: function (__typed__) { return exports.AddBookie.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GamblersUnion).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GamblersUnion).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.GamblersUnion; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.GamblersUnion);

