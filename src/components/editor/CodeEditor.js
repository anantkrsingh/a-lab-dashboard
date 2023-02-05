/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import themelist from "monaco-themes/themes/themelist.json";
import { Modal, Button } from "antd";
import { IoSettings } from "react-icons/io5";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
import { useNotifications } from "@mantine/notifications";

const languages = [
  {
    name: "C",
    language: "c",
    version: "10.2.0",
    editorLang: "c",
    extention: "c",
    defaultCode: `// Let's write some code `,
  },
  {
    name: "C++",
    language: "cpp",
    version: "10.2.0",
    editorLang: "cpp",
    extention: "cpp",
    defaultCode: `// Let's write some code `,
  },
  {
    name: "Python 2",
    language: "python",
    version: "2.7.18",
    editorLang: "python",
    extention: "py",
    defaultCode: `# Let's write some code`,
  },
  {
    name: "Python",
    language: "python",
    version: "3.9.4",
    editorLang: "python",
    extention: "py",
    defaultCode: `# Let's write some code`,
  },
  {
    name: "JavaScript",
    language: "javascript",
    version: "1.7.5",
    editorLang: "javascript",
    extention: "js",
    defaultCode: `// Let's write some code`,
  },
];

const themes = Object.entries(themelist).map(([key, theme]) => {
  return { label: theme, value: key };
});

export default function CodeEditor() {
  const [language, setLanguage] = useState({
    name: "JavaScript",
    language: "javascript",
    version: "1.7.5",
    editorLang: "javascript",
    extention: "js",
    defaultCode: `// Let's write some buggy code 😈`,
  });
  const [code, setCode] = useState("// Let's write some buggy code 😈");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [settings, setSettings] = useState({
    minimap: false,
    wordWrap: true,
    fontSize: 14,
    vimMode: false,
    theme: "Dreamweaver",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const notifications = useNotifications();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const updateSettings = (newData) => setSettings({ ...settings, ...newData });
  const monaco = useMonaco();
  const handleSubmit = () => {
    db.collection("coding-completed")
      .add({
        codingData: code,
        codingIsCorrect: false,
        grade: "",
        timeOfSubmission: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        // setLoader(false);
        notifications.showNotification({
          title: "Answer submitted",
          message:
            "Hey Anish, your code is awesome! We have recieved your anwer and is under review.",
        });
      })
      .catch((error) => {
        notifications.showNotification({
          title: "Oops Something went wrong.",
          color: "red",
          message: `Hey Anish, sorry for inconvenience. ${error.message}`,
        });
        // setLoader(false);
      });
  };
  useEffect(() => {
    if (!monaco) return;

    const loadThemes = async () => {
      for (const theme of themes) {
        try {
          const tmTheme = await import(
            `monaco-themes/themes/${theme.label}.json`
          );
          monaco.editor.defineTheme(theme.value, tmTheme);
        } catch (e) {
          console.log("Error loading theme", theme.label);
          console.log(e);
        }
      }
    };

    loadThemes();
  }, [monaco]);

  // load localstorage state
  useEffect(() => {
    try {
      const localSettings = localStorage.getItem("localSettings");
      if (localSettings) {
        setSettings(JSON.parse(localSettings));
      }
      const localCode = localStorage.getItem("localCode");
      if (localCode) {
        setCode(localCode);
      }
    } catch (e) {}
  }, []);

  // save to localstorage
  useEffect(() => {
    try {
      localStorage.setItem("localCode", code);
    } catch (e) {}
  }, [code]);

  // save to localstorage
  useEffect(() => {
    try {
      localStorage.setItem("localSettings", settings);
    } catch (e) {}
  }, [settings]);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        body: JSON.stringify({
          language: language.language,
          version: language.version,
          stdin: input,
          files: [
            {
              name: `main.${language.extention}`,
              content: code,
            },
          ],
        }),
      });
      const response = await res.json();
      if (response.run.code === 0) {
        setError(false);
        setOutput(response.run.output);
      } else {
        throw new Error(response.run.output);
      }
    } catch (e) {
      setError(true);
      setOutput(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div className="border-dark modal-header">
          <h5 className="mb-0">Editor Settings</h5>
          <button
            type="button"
            class="btn-close btn-close-white ms-auto"
            aria-label="Close"
            onClick={() => setSettingsModalOpen(false)}
          />
        </div>
        <div>
          <div className="row align-items-center mb-2">
            <div className="col-4">
              <label htmlFor="wordWrap">Word Wrap:</label>
            </div>
            <div className="col-6">
              <input
                type="checkbox"
                id="wordWrap"
                checked={settings.wordWrap}
                onChange={(e) => updateSettings({ wordWrap: e.target.checked })}
              />
            </div>
          </div>

          <div className="row align-items-center mb-2">
            <div className="col-4">
              <label htmlFor="minimap">Minimap:</label>
            </div>
            <div className="col-6">
              <input
                type="checkbox"
                id="minimap"
                checked={settings.minimap}
                onChange={(e) => updateSettings({ minimap: e.target.checked })}
              />
            </div>
          </div>

          <div className="row align-items-center mb-2">
            <div className="col-4">
              <label htmlFor="fontSize">Font Size (px):</label>
            </div>
            <div className="col-6">
              <input
                className="bg-dark text-light border-dark form-control"
                type="number"
                id="fontSize"
                value={settings.fontSize}
                onChange={(e) =>
                  updateSettings({ fontSize: e.target.valueAsNumber })
                }
              />
            </div>
          </div>

          <div className="row align-items-center mb-2">
            <div className="col-4">
              <label htmlFor="theme">Select Theme: </label>
            </div>
            <div className="col-6">
              <select
                className="form-select bg-dark text-light border-dark"
                id="theme"
                value={settings.theme}
                onChange={(e) => updateSettings({ theme: e.target.value })}>
                <option className="bg-dark text-light py-2" value="vs-dark">
                  VS Dark
                </option>
                {themes.map((theme) => (
                  <option
                    className="bg-dark text-light py-2"
                    key={theme.label}
                    value={theme.value}>
                    {theme.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Modal>

      <div className="text-black flex sm:w-[80vw] ">
        <div className="">
          <div className="flex w-[80vw] justify-between">
            <div>
              <label className="hidden" htmlFor="language">
                Language:
              </label>
              <select
                className="max-w-[180px] h-[50px] bg-white text-black border outline-none px-5 rounded-lg"
                style={{ width: 150 }}
                id="language"
                value={JSON.stringify(language)}
                onChange={(e) => {
                  const newLang = JSON.parse(e.target.value);
                  setLanguage(newLang);
                  setCode(newLang.defaultCode);
                }}>
                {languages.map((lang) => (
                  <option
                    className="bg-dark text-light py-2"
                    key={lang.name}
                    value={JSON.stringify(lang)}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <h1 className="h1 text-green-500">Online code editor</h1>
            </div>

            <div className="flex items-center justify-evenly">
              <span className="cursor-pointer">
                <IoSettings className="w-[70px] h-[27px]" onClick={showModal} />
              </span>

              <Button
                type="primary"
                onClick={onSubmit}
                disabled={isLoading}
                loading={isLoading}
                size="large"
                className="m-2">
                {isLoading ? <>Running..</> : <>Run Code</>}
              </Button>

              <Button onClick={handleSubmit} className="m-2" size="large">
                Send Code
              </Button>
            </div>
          </div>

          <div className="w-[100%] h-[60vh] rounded-xl overflow-hidden border mt-3 py-2 bg-white">
            <Editor
              height="60vh"
              width="100%"
              language={language.editorLang}
              value={code}
              onChange={setCode}
              theme={settings.theme}
              options={{
                minimap: { enabled: settings.minimap },
                wordWrap: settings.wordWrap ? "on" : "off",
                fontSize: `${settings.fontSize || 0}px`,
              }}
            />
          </div>

          <div className="flex justify-between mt-[5px]">
            <div className="w-1/2 p-2">
              <label htmlFor="input">
                <h3 className="h3">Input</h3>
              </label>
              <textarea
                placeholder="Custom input"
                className="w-[100%] items-center flex border h-[100px] p-2 rounded-xl"
                style={{ outline: 0, resize: "vertical" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="w-1/2 p-2">
              <label className="mb-1" htmlFor="output">
                <h3 className="h3">Output</h3>
              </label>
              <textarea
                className="w-[100%] items-center flex border p-2 rounded-xl h-[100px]"
                placeholder="Output of your code..."
                value={output || "No output"}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
