/**
 * @name 剪贴板
 */

/**
 * @name 剪贴板
 * @type Object
 */
const Clipboard=(function()
{
/*成员*/

    let copyDummy;
    /**
     * @name 初始化
     * @type Function
     * @see Clipboard
     */
    let initiate=function()
    {
        let textarea=document.createElement('textarea');
        textarea.style='position:absolute; width:0; height:0; opacity:0;';
        copyDummy=textarea;
        document.body.appendChild(copyDummy);
    };

/*接口*/

    /**
     * @name 复制
     * @type Function
     * @see Clipboard
     * @param {String} value 内容
     */
    let copy=function(value)
    {
        copyDummy.value=value;
        copyDummy.select();
        document.execCommand('Copy');
    };

/*构造*/

    document.addEventListener('DOMContentLoaded',function()
    {
        initiate();
    });

    return {copy};
})();