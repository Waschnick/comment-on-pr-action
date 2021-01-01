# comment-on-pr-action
A Github Action to create comments on pull requests with templates, supporting environment variables

# Comment on PR

A GitHub action to add a comment on pull requests.

## Usage Example

[`.github/workflows/example.yml`](.github/workflows/example.yml)

```yml
name: Add checkout commands
on: pull_request
jobs:
  comment:
    name: Add checkout commands
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: harupy/comment-on-pr@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          filename: template.md
```

[`.github/workflows/template.md`](.github/workflows/template.md)

````markdown
commands to checkout to this branch

```
git fetch upstream pull/{pull_id}/head:{branch_name}
git checkout {branch_name}
```
````

The template above creates:

![comment_example](./assets/comment_example.png)

## DISCLAIMER

If you prefer not to download a full action, this can now be easily done thanks to [github scripts](https://github.com/actions/github-script). (Source: https://github.com/thollander/actions-comment-pull-request)

```yml
- name: 'Comment PR'
  uses: actions/github-script@0.3.0
  if: github.event_name == 'pull_request'
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    script: |
      const { issue: { number: issue_number }, repo: { owner, repo }  } = context;
      github.issues.createComment({ issue_number, owner, repo, body: 'Hello world ! 👋' });
```