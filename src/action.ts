import * as core from '@actions/core'
import {Toolkit} from 'actions-toolkit'
import fm from 'front-matter'
import nunjucks from 'nunjucks'
// @ts-ignore
import dateFilter from 'nunjucks-date-filter'

// import {FrontMatterAttributes, listToArray, setOutputs} from './helpers'

export async function commentOnPullRequest(tools: Toolkit) {
    tools.log("Inputs: " + tools.inputs)
    tools.log("tools.context: " + tools.context)
    tools.log("process.env: " + process.env)


    tools.log.success("DONE")
}
