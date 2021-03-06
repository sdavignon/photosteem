import {Metadata} from "./metadata.model";

export class Author {

  /**
   * This author name
   *
   * @type string
   */
  public name: string;

  /**
   * This author username
   *
   * @type string
   */
  public username: string;

  /**
   * This author avatar url
   *
   * @type string
   */
  public avatar: string;

  /**
   * This author vote permission
   *
   * @type boolean
   */
  public can_vote: boolean;

  /**
   * This author voting power
   *
   * @type number
   */
  public voting_power: number;

  /**
   * JSON string of the post metadata
   *
   * @type string
   */
  private json_metadata: string;

  /**
   * Parses a post metadata
   *
   * @param author
   * @returns {Author}
   */
  public static parseAuthor(author: Author): Author {
    let postMetadata: Metadata;

    try {
      postMetadata = JSON.parse(author.json_metadata);
    } catch(e) {
      console.warn('Error while parsing Post json metadata');
    }

    if (postMetadata && postMetadata.profile && postMetadata.profile.profile_image) {
      author.avatar = postMetadata.profile.profile_image;
    } else {
      author.avatar = '/assets/default-avatar.jpg';
    }

    return author;
  }
}
