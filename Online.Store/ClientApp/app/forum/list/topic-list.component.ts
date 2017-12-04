﻿import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ForumState } from '../store/forum.state';
import { Observable } from 'rxjs/Observable';
import * as forumActions from '../store/forum.actions';
import { Topic } from "../../models/topic";
import { NotifyService } from '../../core/services/notifications.service';
import { User } from '../../models/user';
import { Reply } from '../../models/reply';

@Component({
    selector: 'topic-list',
    templateUrl: './topic-list.component.html',

})

export class TopicListComponent implements OnInit {

    topics$: Observable<Topic[]>;
    user$: Observable<User>;

    constructor(private store: Store<any>, private notifyService: NotifyService) {
        this.topics$ = this.store.select<Topic[]>(state => state.community.forumState.topics);
        this.user$ = this.store.select<User>(state => state.user.userState.user);
    }

    ngOnInit() {
        this.notifyService.setLoading(true);
        this.store.dispatch(new forumActions.SelectAllAction());
    }

    submitTopic(reply: Reply) {
        this.notifyService.setLoading(true);
        this.store.dispatch(new forumActions.AddTopicAction(reply));
    }
}