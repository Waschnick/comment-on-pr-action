import { Toolkit } from 'actions-toolkit'
import { commentOnPullRequest } from './action'

Toolkit.run(commentOnPullRequest, {
  secrets: ['GITHUB_TOKEN']
})
