import { Component } from '@angular/core';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  medium = '';
  mediaItems = [];

  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit() {
    this.getMediaItems(this.medium);
  }

  onMediaItemDeleted(mediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}
