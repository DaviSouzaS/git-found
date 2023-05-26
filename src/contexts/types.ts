export interface iUserProviderValue {
    getUserInfos: (username: string) => Promise<void>,
    searchError: number | null,
    getUserRepositories: (username: string) => Promise<void>,
    addUsersInHistoric: () => void,
    historic: iUser[],
    openHistoricModal: () => void,
    closeHistoricModal: () => void,
    openModal: boolean,
    setHistoric: React.Dispatch<React.SetStateAction<iUser[]>>,
    search: (data: iSearch) => Promise<void>
}

export interface iSearch {
    search: string
}

export interface iUserProviderProps {
    children: React.ReactNode
}

export interface iRepos {
    allow_forking: boolean
    archive_url: string
    archived: boolean
    assignees_url: string
    blobs_url: string
    branches_url: string
    clone_url: string
    collaborators_url: string
    comments_url: string
    commits_url: string
    compare_url: string
    contents_url: string
    contributors_url: string
    created_at: string
    default_branch: string
    deployments_url: string
    description: string | null
    disabled: boolean
    downloads_url: string
    events_url: string
    fork: boolean
    forks: number
    forks_count: number
    forks_url: string
    full_name: string
    git_commits_url: string
    git_refs_url: string
    git_tags_url: string
    git_url: string
    has_discussions: boolean
    has_downloads: boolean
    has_issues: boolean
    has_pages: boolean
    has_projects: boolean
    has_wiki: boolean
    homepage: string | null
    hooks_url: string
    html_url: string
    id: number
    is_template: boolean
    issue_comment_url: string
    issue_events_url: string
    issues_url: string
    keys_url: string
    labels_url: string
    language: string | null
    languages_url: string
    license: string | null
    merges_url: string
    milestones_url: string
    mirror_url: string | null
    name: string
    node_id: string
    notifications_url: string
    open_issues: number
    open_issues_count: number
    owner: iUser
    private: boolean
    pulls_url: string
    pushed_at: string
    releases_url: string
    size: number
    ssh_url: string
    stargazers_count: number
    stargazers_url: string
    statuses_url: string
    subscribers_url: string
    subscription_url: string
    svn_url: string
    tags_url: string
    teams_url: string
    topics: string[]
    trees_url: string
    updated_at: string
    url: string
    visibility: string
    watchers: number
    watchers_count: number
    web_commit_signoff_required: boolean
}

export interface iUser {
    avatar_url: string | undefined
    bio: string 
    blog: string
    company: string | null
    created_at: string
    email: string | null
    events_url: string
    followers: number
    followers_url: string
    following: number
    following_url: string
    gists_url: string
    gravatar_id: string
    hireable: string | null
    html_url: string
    id: number
    location: string | null
    login: string
    name: string
    node_id: string
    organizations_url: string
    public_gists: number
    public_repos: number
    received_events_url: string
    repos_url: string
    site_admin: false
    starred_url: string
    subscriptions_url: string
    twitter_username: string | null
    type: string
    updated_at: string
    url: string
}

export interface iHistoricRepos extends iUser {
    repos: iRepos[]
}

export interface iHistoric extends iUser {
    repos?: iRepos[]
}