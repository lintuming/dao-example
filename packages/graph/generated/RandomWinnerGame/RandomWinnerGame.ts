// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class GameStarted extends ethereum.Event {
  get params(): GameStarted__Params {
    return new GameStarted__Params(this);
  }
}

export class GameStarted__Params {
  _event: GameStarted;

  constructor(event: GameStarted) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GameStatusChanged extends ethereum.Event {
  get params(): GameStatusChanged__Params {
    return new GameStatusChanged__Params(this);
  }
}

export class GameStatusChanged__Params {
  _event: GameStatusChanged;

  constructor(event: GameStatusChanged) {
    this._event = event;
  }

  get game(): GameStatusChangedGameStruct {
    return changetype<GameStatusChangedGameStruct>(
      this._event.parameters[0].value.toTuple(),
    );
  }
}

export class GameStatusChangedGameStruct extends ethereum.Tuple {
  get gameId(): BigInt {
    return this[0].toBigInt();
  }

  get status(): i32 {
    return this[1].toI32();
  }

  get maxPlayers(): BigInt {
    return this[2].toBigInt();
  }

  get entryFeeNumerator(): BigInt {
    return this[3].toBigInt();
  }

  get entryFeeDenominator(): BigInt {
    return this[4].toBigInt();
  }

  get players(): Array<Address> {
    return this[5].toAddressArray();
  }

  get winner(): Address {
    return this[6].toAddress();
  }

  get owner(): Address {
    return this[7].toAddress();
  }
}

export class NewGame extends ethereum.Event {
  get params(): NewGame__Params {
    return new NewGame__Params(this);
  }
}

export class NewGame__Params {
  _event: NewGame;

  constructor(event: NewGame) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get maxPlayers(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get entryFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PlayerJoined extends ethereum.Event {
  get params(): PlayerJoined__Params {
    return new PlayerJoined__Params(this);
  }
}

export class PlayerJoined__Params {
  _event: PlayerJoined;

  constructor(event: PlayerJoined) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _address(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class finishGameEvent extends ethereum.Event {
  get params(): finishGameEvent__Params {
    return new finishGameEvent__Params(this);
  }
}

export class finishGameEvent__Params {
  _event: finishGameEvent;

  constructor(event: finishGameEvent) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get winner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class pickWinnerCall extends ethereum.Event {
  get params(): pickWinnerCall__Params {
    return new pickWinnerCall__Params(this);
  }
}

export class pickWinnerCall__Params {
  _event: pickWinnerCall;

  constructor(event: pickWinnerCall) {
    this._event = event;
  }

  get requestId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class receiveRandomWord extends ethereum.Event {
  get params(): receiveRandomWord__Params {
    return new receiveRandomWord__Params(this);
  }
}

export class receiveRandomWord__Params {
  _event: receiveRandomWord;

  constructor(event: receiveRandomWord) {
    this._event = event;
  }

  get requestId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get randomwords(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get gameId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RandomWinnerGame__gamesResult {
  value0: BigInt;
  value1: i32;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: Address;

  constructor(
    value0: BigInt,
    value1: i32,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: Address,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1)),
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    return map;
  }

  getGameId(): BigInt {
    return this.value0;
  }

  getStatus(): i32 {
    return this.value1;
  }

  getMaxPlayers(): BigInt {
    return this.value2;
  }

  getEntryFeeNumerator(): BigInt {
    return this.value3;
  }

  getEntryFeeDenominator(): BigInt {
    return this.value4;
  }

  getWinner(): Address {
    return this.value5;
  }

  getOwner(): Address {
    return this.value6;
  }
}

export class RandomWinnerGame extends ethereum.SmartContract {
  static bind(address: Address): RandomWinnerGame {
    return new RandomWinnerGame("RandomWinnerGame", address);
  }

  games(param0: BigInt): RandomWinnerGame__gamesResult {
    let result = super.call(
      "games",
      "games(uint256):(uint256,uint8,uint256,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new RandomWinnerGame__gamesResult(
      result[0].toBigInt(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toAddress(),
    );
  }

  try_games(
    param0: BigInt,
  ): ethereum.CallResult<RandomWinnerGame__gamesResult> {
    let result = super.tryCall(
      "games",
      "games(uint256):(uint256,uint8,uint256,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RandomWinnerGame__gamesResult(
        value[0].toBigInt(),
        value[1].toI32(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toAddress(),
      ),
    );
  }

  gasLimit(): BigInt {
    let result = super.call("gasLimit", "gasLimit():(uint32)", []);

    return result[0].toBigInt();
  }

  try_gasLimit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("gasLimit", "gasLimit():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  holdingGame(param0: Address): BigInt {
    let result = super.call("holdingGame", "holdingGame(address):(uint256)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBigInt();
  }

  try_holdingGame(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "holdingGame",
      "holdingGame(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  keyHash(): Bytes {
    let result = super.call("keyHash", "keyHash():(bytes32)", []);

    return result[0].toBytes();
  }

  try_keyHash(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("keyHash", "keyHash():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  subscriptionId(): BigInt {
    let result = super.call("subscriptionId", "subscriptionId():(uint64)", []);

    return result[0].toBigInt();
  }

  try_subscriptionId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "subscriptionId",
      "subscriptionId():(uint64)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalGames(): BigInt {
    let result = super.call("totalGames", "totalGames():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalGames(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalGames", "totalGames():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _coordinatorAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _subscriptionId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _keyHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class JoinGameCall extends ethereum.Call {
  get inputs(): JoinGameCall__Inputs {
    return new JoinGameCall__Inputs(this);
  }

  get outputs(): JoinGameCall__Outputs {
    return new JoinGameCall__Outputs(this);
  }
}

export class JoinGameCall__Inputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }

  get gameId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class JoinGameCall__Outputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }
}

export class NewGameCall extends ethereum.Call {
  get inputs(): NewGameCall__Inputs {
    return new NewGameCall__Inputs(this);
  }

  get outputs(): NewGameCall__Outputs {
    return new NewGameCall__Outputs(this);
  }
}

export class NewGameCall__Inputs {
  _call: NewGameCall;

  constructor(call: NewGameCall) {
    this._call = call;
  }

  get _maxPlayers(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _entryFeeNumerator(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _entryFeeDenominator(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class NewGameCall__Outputs {
  _call: NewGameCall;

  constructor(call: NewGameCall) {
    this._call = call;
  }
}

export class PickWinnerCall extends ethereum.Call {
  get inputs(): PickWinnerCall__Inputs {
    return new PickWinnerCall__Inputs(this);
  }

  get outputs(): PickWinnerCall__Outputs {
    return new PickWinnerCall__Outputs(this);
  }
}

export class PickWinnerCall__Inputs {
  _call: PickWinnerCall;

  constructor(call: PickWinnerCall) {
    this._call = call;
  }
}

export class PickWinnerCall__Outputs {
  _call: PickWinnerCall;

  constructor(call: PickWinnerCall) {
    this._call = call;
  }
}

export class RawFulfillRandomWordsCall extends ethereum.Call {
  get inputs(): RawFulfillRandomWordsCall__Inputs {
    return new RawFulfillRandomWordsCall__Inputs(this);
  }

  get outputs(): RawFulfillRandomWordsCall__Outputs {
    return new RawFulfillRandomWordsCall__Outputs(this);
  }
}

export class RawFulfillRandomWordsCall__Inputs {
  _call: RawFulfillRandomWordsCall;

  constructor(call: RawFulfillRandomWordsCall) {
    this._call = call;
  }

  get requestId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get randomWords(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class RawFulfillRandomWordsCall__Outputs {
  _call: RawFulfillRandomWordsCall;

  constructor(call: RawFulfillRandomWordsCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetGasLimitCall extends ethereum.Call {
  get inputs(): SetGasLimitCall__Inputs {
    return new SetGasLimitCall__Inputs(this);
  }

  get outputs(): SetGasLimitCall__Outputs {
    return new SetGasLimitCall__Outputs(this);
  }
}

export class SetGasLimitCall__Inputs {
  _call: SetGasLimitCall;

  constructor(call: SetGasLimitCall) {
    this._call = call;
  }

  get _gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetGasLimitCall__Outputs {
  _call: SetGasLimitCall;

  constructor(call: SetGasLimitCall) {
    this._call = call;
  }
}

export class StartGameCall extends ethereum.Call {
  get inputs(): StartGameCall__Inputs {
    return new StartGameCall__Inputs(this);
  }

  get outputs(): StartGameCall__Outputs {
    return new StartGameCall__Outputs(this);
  }
}

export class StartGameCall__Inputs {
  _call: StartGameCall;

  constructor(call: StartGameCall) {
    this._call = call;
  }
}

export class StartGameCall__Outputs {
  _call: StartGameCall;

  constructor(call: StartGameCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}