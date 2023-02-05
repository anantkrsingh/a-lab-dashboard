/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import themelist from "monaco-themes/themes/themelist.json";
import { Modal, Button } from "antd";
import { IoSettingsSharp } from "react-icons/io5";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
const languages = [
  {
    name: "C",
    language: "c",
    version: "10.2.0",
    editorLang: "c",
    extention: "c",
    defaultCode: `// Let's write some buggy code 😈`,
  },
  {
    name: "C++",
    language: "cpp",
    version: "10.2.0",
    editorLang: "cpp",
    extention: "cpp",
    defaultCode: `// Let's write some buggy code 😈`,
  },
  {
    name: "Python 2",
    language: "python",
    version: "2.7.18",
    editorLang: "python",
    extention: "py",
    defaultCode: `# Let's write some buggy code 😈`,
  },
  {
    name: "Python",
    language: "python",
    version: "3.9.4",
    editorLang: "python",
    extention: "py",
    defaultCode: `# Let's write some buggy code 😈`,
  },
  {
    name: "JavaScript",
    language: "javascript",
    version: "1.7.5",
    editorLang: "javascript",
    extention: "js",
    defaultCode: `// Let's write some buggy code 😈`,
  },
];

const themes = Object.entries(themelist).map(([key, theme]) => {
  return { label: theme, value: key };
});

export default function AdminCodeEditor({ ReceivedCode }) {
  const [language, setLanguage] = useState({
    name: "JavaScript",
    language: "javascript",
    version: "1.7.5",
    editorLang: "javascript",
    extention: "js",
    defaultCode: `// Let's write some buggy code 😈`,
  });
  const [code, setCode] = useState(ReceivedCode);
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
    theme: "vs-dark",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        timeOfSubmission: firebase.firestore.Timestamp.fromDate(new Date()),
      })
      .then(() => {
        // setLoader(false);
        alert(`Your experiment has been submitted.`);
      })
      .catch((error) => {
        alert(error.message);
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
          <div className="flex">
            <div className="flex w-[95vw] sm:w-full justify-between">
              <label className="hidden" htmlFor="language">
                Language:{" "}
              </label>
              <select
                className="max-w-[150px] bg-white border-none text-black"
                style={{ width: 150 }}
                id="language"
                value={JSON.stringify(language)}
                onChange={(e) => {
                  const newLang = JSON.parse(e.target.value);
                  setLanguage(newLang);
                  setCode(newLang.defaultCode);
                }}>
                <option className="bg-dark text-light py-2" value="{}">
                  Select language
                </option>
                {languages.map((lang) => (
                  <option
                    className="bg-dark text-light py-2"
                    key={lang.name}
                    value={JSON.stringify(lang)}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <div className="m-auto flex items-center justify-evenly	 ">
                {/* <Button
                  className="text-black border-none w-[40px]"
                
                  >
                  </Button> */}
                <IoSettingsSharp
                  className="w-[70px] h-[27px]"
                  onClick={showModal}
                />
                <button
                  className="bg-green-500	p-[10px] rounded-[10px] text-white mb-[10px]"
                  onClick={onSubmit}
                  disabled={isLoading}>
                  {/* {isLoading ? (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    <>Loading </>
                  )} */}
                  <span>Run Code</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex sm:w-[80vw]">
            <Editor
              height="70vh"
              width="100%"
              //  className="sm:w-[80vw]"
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

          <div className="flex flex-col mt-[10px]">
            <div className="flex items-center p-[5px]">
              <label htmlFor="output" style={{ width: 70 }}>
                Input
              </label>
              <textarea
                placeholder="Custom input"
                className="w-full items-center flex"
                style={{ outline: 0, resize: "vertical" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center p-[5px]">
              <label className="mb-1" htmlFor="output" style={{ width: 70 }}>
                Output
              </label>
              <textarea
                className="w-full items-center flex"
                placeholder="Output of your code..."
                value={output || "No output"}
                readOnly
              />
            </div>
          </div>
        </div>
        <button onClick={handleSubmit}>Send Code</button>
      </div>
    </>
  );
}
