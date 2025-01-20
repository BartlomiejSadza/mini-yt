export interface YouTubeVideoDetails {
  snippet: {
    title: string;
    channelTitle: string;
    description: string;
    thumbnails: {
      maxres: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
  contentDetails: {
    duration: string;
  };
}

export interface YouTubeResponse {
  items: YouTubeVideoDetails[];
}