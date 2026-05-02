(function () {

  function createPopup() {
    const wrapper = document.createElement("div");
    wrapper.id = "mirror-popup";

    wrapper.innerHTML = `
      <div class="mp-mask"></div>

      <div class="mp-card">
        <h2>⚠️ 镜像站提示</h2>

        <p>
          你正在访问的是 <b>本站镜像站点</b><br>
          请确认是否继续访问。
        </p>

        <div class="mp-buttons">
          <button id="mp-cancel">关闭</button>
          <button id="mp-go">进入主站</button>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);

    // 关闭（仅关闭当前弹窗，不记录状态）
    document.getElementById("mp-cancel").onclick = function () {
      wrapper.remove();
    };

    // 跳转主站
    document.getElementById("mp-go").onclick = function () {
      window.location.href = "https://blog.xp6.top";
    };
  }

  function addStyle() {
    const style = document.createElement("style");

    style.innerHTML = `
      #mirror-popup {
        position: fixed;
        inset: 0;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.2s ease;
      }

      .mp-mask {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.55);
        backdrop-filter: blur(6px);
      }

      .mp-card {
        position: relative;
        width: 360px;
        padding: 22px;
        border-radius: 16px;

        background: rgba(255,255,255,0.88);
        backdrop-filter: blur(14px);

        box-shadow: 0 12px 40px rgba(0,0,0,0.25);
        text-align: center;

        animation: pop 0.25s ease;
      }

      .mp-card h2 {
        margin: 0 0 10px;
        font-size: 18px;
      }

      .mp-card p {
        font-size: 14px;
        color: #444;
        line-height: 1.6;
      }

      .mp-buttons {
        margin-top: 16px;
        display: flex;
        gap: 10px;
        justify-content: center;
      }

      .mp-buttons button {
        padding: 8px 14px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-size: 13px;
        transition: 0.2s;
      }

      #mp-cancel {
        background: #e5e5e5;
        color: #333;
      }

      #mp-go {
        background: #1677ff;
        color: #fff;
      }

      #mp-go:hover {
        background: #0f5ed7;
      }

      #mp-cancel:hover {
        background: #d6d6d6;
      }

      @keyframes pop {
        from { transform: scale(0.85); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @media (max-width: 480px) {
        .mp-card {
          width: 85%;
        }
      }
    `;

    document.head.appendChild(style);
  }

  window.addEventListener("load", function () {
    addStyle();
    createPopup();
  });

})();