export declare namespace ApiTypes {

  export interface RepositoryOwner {
    id: number
    login: string
    avatar_url: string
    events_url?: string
    followers_url?: string
    following_url?: string
    gists_url?: string
    gravatar_id?: string
    html_url?: string
    node_id?: string
    organizations_url?: string
    received_events_ur?: string
    repos_url?: string
    site_admin?: boolean
    starred_url?: string
    subscriptions_url?: string
    type?: string
    url?: string
  }

  export interface Repository {
    archive_url: string
    assignees_url: string
    blobs_url: string
    branches_url: string
    collaborators_url: string
    comments_url: string
    commits_url: string
    compare_url: string
    contents_url: string
    contributors_url: string
    deployments_url: string
    description: string
    downloads_url: string
    events_url: string
    fork: boolean
    forks_url: string
    full_name: string
    git_commits_url: string
    git_refs_url: string
    git_tags_url: string
    hooks_url: string
    html_url: string
    id: number
    issue_comment_url: string
    issue_events_url: string
    issues_url: string
    keys_url: string
    labels_url: string
    languages_url: string
    merges_url: string
    milestones_url: string
    name: string
    node_id: string
    notifications_url: string
    owner: RepositoryOwner
    private: boolean
    pulls_url: string
    releases_url: string
    stargazers_url: string
    statuses_url: string
    subscribers_url: string
    subscription_url: string
    tags_url: string
    teams_url: string
    trees_url: string
    url: string
  }

}