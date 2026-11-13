import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const git = simpleGit();
const path = './data.json';

async function markCommit() {
  const date = moment().format();
  await jsonfile.writeFile(path, { date });

  await git.add(['data.json']);
  await git.commit(`Update contribution data: ${date}`);

  console.log(`Commit created: ${date}`);
}

markCommit().catch(console.error);
