export interface IBoardBase {
  getId(): number;
  getTitle(): string;
  getWriter(): string;
  getCreatedAt(): string;
  getLikes(): number;
  getUnlikes(): number;
  getLooks(): number;
}

export interface IBoardItemHeader extends IBoardBase {
  getCommentCnt(): number;
}

export interface IBoardItemContent extends IBoardBase {
  getIsWriter(): boolean;
  getIsUser(): boolean;
  getIsOpen(): boolean;
  getUpdatedAt(): string;
  getContent(): string;
}

class BoardItemCls implements IBoardItemHeader, IBoardItemContent {
  private id: number;
  private title: string;
  private writer: string;
  private createdAt: string;
  private likes: number;
  private unlikes: number;
  private looks: number;
  private commentCnt: number;
  private isWriter: boolean;
  private isUser: boolean;
  private isOpen: boolean;
  private updatedAt: string;
  private content: string;

  constructor(boardObj: {
    id: number;
    title: string;
    writer: string;
    createdAt: string;
    likes: number;
    unlikes: number;
    looks: number;
    commentCnt: number;
    isWriter: boolean;
    isUser: boolean;
    isOpen?: boolean;
    updatedAt: string;
    content: string;
  }) {
    this.id = boardObj.id;
    this.title = boardObj.title;
    this.writer = boardObj.writer;
    this.createdAt = boardObj.createdAt;
    this.likes = boardObj.likes;
    this.unlikes = boardObj.unlikes;
    this.looks = boardObj.looks;
    this.commentCnt = boardObj.commentCnt;
    this.isWriter = boardObj.isWriter;
    this.isUser = boardObj.isUser;
    this.isOpen = boardObj.isOpen ? true : false;
    this.updatedAt = boardObj.updatedAt;
    this.content = boardObj.content;
  }
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getWriter() {
    return this.writer;
  }
  getCreatedAt() {
    return this.createdAt;
  }
  getLikes() {
    return this.likes;
  }
  getUnlikes() {
    return this.unlikes;
  }
  getLooks() {
    return this.looks;
  }
  getCommentCnt() {
    return this.commentCnt;
  }
  getIsWriter() {
    return this.isWriter;
  }
  getIsUser() {
    return this.isUser;
  }
  getIsOpen() {
    return this.isOpen;
  }
  getUpdatedAt() {
    return this.updatedAt;
  }
  getContent() {
    return this.content;
  }
}

export default BoardItemCls;
