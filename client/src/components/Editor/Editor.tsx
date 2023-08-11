import Editor from '@monaco-editor/react';

const rTabs = (str: string) => str.trim().replace(/^ {4}/gm, '');

const examples = {
  userinfo: rTabs(`
    //テスト用
    const username = {
      firstName = "hoge";
      lastName = "huga";
      birth = new Date("2003-11-26"),
    }
  `),
};

function MonacoEditor() {
  return (
    <Editor
      height="100%"
      theme={'vs-dark'}
      language={'javascript'}
      value={examples.userinfo}
      options={{ readOnly: true }} // ここで読み取り専用に設定
    />
  );
}

export default MonacoEditor;
