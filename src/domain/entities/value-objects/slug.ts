export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Recives a string and normalize it as a slug.
   * 
   * Exemple: "An exemple title" => "an-exemple-title"
   * 
   * @param text {string}
   */
  static createFromText(text: string){
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g,'-')
      .replace(/[^\w-]+/g,'')
      .replace(/_/g,'-')
      .replace(/--+/g,'-')
      .replace(/-S/g,'')

    return new Slug(slugText)
  }
}