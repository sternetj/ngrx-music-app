import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Video } from '../models/video';

@Injectable()
export class VideoService {
  private videos: Video[] = [];
  private subject: BehaviorSubject<Video[]>;

  constructor() {
    this.subject = new BehaviorSubject(this.videos);
  }

  public addVideo(video) {
    this.videos.push(video);
    this.subject.next(this.videos.slice());
  }

  public get videoList() {
    return this.subject.asObservable();
  }

  public moveUp(video: Video): any {
    const toMoveIndex = this.videos.indexOf(video);
    const left = this.videos.slice(0, toMoveIndex - 1);
    const neighbor = this.videos.slice(toMoveIndex - 1, toMoveIndex);
    const right = this.videos.slice(toMoveIndex + 1);

    this.videos = [];
    this.videos.push(...left, video, ...neighbor, ...right);
    this.subject.next(this.videos.slice());
  }

  public moveDown(video: Video): any {
    const toMoveIndex = this.videos.indexOf(video);
    const left = this.videos.slice(0, toMoveIndex);
    const neighbor = this.videos.slice(toMoveIndex + 1, toMoveIndex + 2);
    const right = this.videos.slice(toMoveIndex + 2);

    this.videos = [];
    this.videos.push(...left, ...neighbor, video, ...right);
    this.subject.next(this.videos.slice());
  }

  public delete(video: Video): any {
    const toMoveIndex = this.videos.indexOf(video);
    const left = this.videos.slice(0, toMoveIndex);
    const right = this.videos.slice(toMoveIndex + 1);

    this.videos = [];
    this.videos.push(...left, ...right);
    this.subject.next(this.videos.slice());
  }

}
