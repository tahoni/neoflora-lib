import {Injectable} from '@angular/core';
import {
  faEllipsisH,
  faGenderless,
  faImage,
  faLeaf,
  faMars,
  faSearch,
  faSeedling,
  faStickyNote,
  faTimes,
  faVenus,
  faVenusMars
} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private readonly _descriptionIcon = faLeaf;
  private readonly _seedIcon = faGenderless;
  private readonly _offspringIcon = faSeedling;
  private readonly _venusMarsIcon = faVenusMars;
  private readonly _venusIcon = faVenus;
  private readonly _marsIcon = faMars;
  private readonly _photoIcon = faImage;
  private readonly _commentIcon = faStickyNote;
  private readonly _multiplicationIcon = faTimes;
  private readonly _moreIcon = faEllipsisH;
  private readonly _searchIcon = faSearch;

  constructor() {
  }

  get descriptionIcon(): IconDefinition {
    return this._descriptionIcon;
  }

  get seedIcon(): IconDefinition {
    return this._seedIcon;
  }

  get offspringIcon(): IconDefinition {
    return this._offspringIcon;
  }

  get venusMarsIcon(): IconDefinition {
    return this._venusMarsIcon;
  }

  get venusIcon(): IconDefinition {
    return this._venusIcon;
  }

  get marsIcon(): IconDefinition {
    return this._marsIcon;
  }

  get photoIcon(): IconDefinition {
    return this._photoIcon;
  }

  get commentIcon(): IconDefinition {
    return this._commentIcon;
  }

  get multiplicationIcon(): IconDefinition {
    return this._multiplicationIcon;
  }

  get moreIcon(): IconDefinition {
    return this._moreIcon;
  }

  get searchIcon(): IconDefinition {
    return this._searchIcon;
  }
}