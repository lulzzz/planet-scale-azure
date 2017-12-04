import { Action } from '@ngrx/store';
import { Topic } from './../../models/topic';
import { Reply } from '../../models/reply';
import { ResultVM } from '../../models/result-vm';

export const SELECTALL = '[Forum] Select All Topics';
export const SELECTALL_COMPLETE = '[Forum] Select All Topics Complete';
export const SELECT_TOPIC = '[Forum] Select Topic';
export const SELECT_TOPIC_COMPLETE = '[Forum] Select Topic Complete';
export const ADD_REPLY = '[Forum] Add Reply';
export const ADD_TOPIC = '[Forum] Add Topic';

export class SelectAllAction implements Action {
    readonly type = SELECTALL;

    constructor() { }
}

export class SelectAllCompleteAction implements Action {
    readonly type = SELECTALL_COMPLETE;

    constructor(public topics: Topic[]) { }
}

export class SelectTopicAction implements Action {
    readonly type = SELECT_TOPIC;

    constructor(public id: string) { }
}

export class SelectTopicCompleteAction implements Action {
    readonly type = SELECT_TOPIC_COMPLETE;

    constructor(public topic: Topic) { }
}

export class AddReplyAction implements Action {
    readonly type = ADD_REPLY;

    constructor(public reply: Reply) {  }
}

export class AddTopicAction implements Action {
    readonly type = ADD_TOPIC;

    constructor(public topic: Reply) {  }
}

export type Actions
    = SelectAllAction
    | SelectAllCompleteAction
    | SelectTopicAction
    | SelectTopicCompleteAction
    | AddReplyAction
    | AddTopicAction;

