import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { getStoredModels, setStoredModels } from '~/utils';
import DropdownBox from '../components/DropdownBox';
import ModelsBox from '../components/ModelsBox';
import styles from './Tools.module.scss';
import { COLAB } from '~/constants/generatingMethods.js';
import TextAreaBox from '../components/TextAreaBox';
const cx = className.bind(styles);
function Tools() {
  const [models, setModels] = useState(getStoredModels());
  const [isGenerated, setIsGenerated] = useState(false);
  useEffect(() => {
    getStoredModels(models);
  }, [models])
  const toPythonVariable = (str) => {
    str = str.trim();
    str = str.replace(/[^\w]/gi, '_');
    str = str.replace(/^(\d)/, '_$1');
    str = str.replace(/(^_)|(_$)/g, '');
    str = str.replace(/_+/g, '_');
    return str;
  }

  const generateText1 = () => {
    return models.map(model => {
      const modelName = model.name;
      const variableName = toPythonVariable(modelName);
      return `${variableName} = True #@param {type:"boolean"}`
    }).join('\n');
  }
  const generateText2 = () => {
    return models.map(model => {
      const modelName = model.name;
      const variableName = toPythonVariable(modelName);
      return `if ${variableName}:\n\t!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://civitai.com/api/download/models/${model.modelVersions[0].id} --content-disposition -o ${variableName}.safetensors`
    }).join('\n');
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('settings')}>
          <DropdownBox
            options={[COLAB]} />
          {/* <button onClick={() => setIsGenerated(true)}>true</button> */}
          {/* <button onClick={() => setIsGenerated(false)}>false</button> */}
          {/* {console.log(isGenerated)} */}
          {!isGenerated ||
            <button className={cx('red-btn') + ' btn'} onClick={() => setIsGenerated(false)}>Close</button>
          }
          {isGenerated ||
            <button className='btn' onClick={() => setIsGenerated(true)}>Generate</button>
          }
        </div>
        <div className={cx('view-box')}>
          {isGenerated || <ModelsBox models={models} setModels={setModels} />}
          <div className={cx('generated-box')}>
            {!isGenerated ||
              <>
                <TextAreaBox>{generateText1()}</TextAreaBox>
                <TextAreaBox>{generateText2()}</TextAreaBox>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tools;
