export default `

     _____  __  __  ____    ___  ____   _____
    | ____||  \\/  ||  _ \\  |_ _||  _ \\ | ____|
    |  _|  | |\\/| || |_) |  | | | | | ||  _|
    | |___ | |  | ||  __/   | | | |_| || |___
    |_____||_|  |_||_|     |___||____/ |_____|

    Easy MicroPython (EMP) 是一个由1Z实验室主导的开源项目，旨在为广大的
    MicroPython爱好者提供更加快速和高效的开发体验。

    在开始使用之前，你需要在你的MicroPython设备上安装 emp-marlene 模块。请按
    照如下的步骤进行：
    import network # 导入network模块
    wifi = network.WLAN(network.STA_IF)  # 设置为STA_IF模式，即接入wifi路由器的模式AP_IF为作为热点
    wifi.active(True) # 将wifi激活
    wifi.connect('<essid>','<password>') #连接至wifi

    import upip
    upip.install('emp-marlene')

    import emp_boot
    emp_boot.set_boot_mode()

    输入2，回车。这将重新覆盖你的 boot.py 文件，之后你的设备将会进行一次重启。
    重启之后按照命令行中的提示来使你的设备连接至WiFi网络。在这之后，webrepl将会
    自动开启，默认的连接密码为'marlene', 你可以在 webrepl.pass 文件中修改它。
`;
