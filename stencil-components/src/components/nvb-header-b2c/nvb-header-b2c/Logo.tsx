import {h} from "@stencil/core";
import AnalyticsDataAttributes from "./AnalyticsDataAttributes";

const Logo = () => <a href="/" class={'logo-link'}
                      {...AnalyticsDataAttributes({action: 'ClickOnHeaderLink', label: 'Home'})}><img alt={"Nationale Vacaturebank"} src={"data:image/svg+xml,%3Csvg%20width%3D%22148%22%20height%3D%2230%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M25.608%204.399A14.967%2014.967%200%200015.027%200C6.719%200%200%206.679%200%2015c0%208.322%206.72%2015%2014.973%2015C23.281%2030%2029.947%2023.269%2030%2015a15.02%2015.02%200%2000-4.392-10.601z%22%20fill%3D%22%23FF9921%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12.963%2016.114c0%203.233-1.27%206.307-3.546%208.639a1.485%201.485%200%2001-2.063.053A1.492%201.492%200%20017.3%2022.74a9.36%209.36%200%20002.751-6.625c0-2.492-1.005-4.824-2.75-6.573-.583-.583-.53-1.484.052-2.067.582-.583%201.482-.53%202.063.053%202.276%202.226%203.598%205.353%203.546%208.587zM12.116%205.936c0-1.59%201.323-2.915%202.91-2.915%201.587%200%202.91%201.325%202.91%202.915s-1.323%202.915-2.91%202.915c-1.64%200-2.91-1.272-2.91-2.915zM23.016%2024.17c-.158.53-.582.955-1.11%201.06-.53.107-1.112-.105-1.43-.53-4.709-4.77-4.709-12.455.053-17.226.371-.371.9-.53%201.429-.371.514.143.915.546%201.058%201.06a1.574%201.574%200%2001-.423%201.431c-1.746%201.75-2.699%204.082-2.699%206.573%200%202.491.953%204.823%202.699%206.572.37.319.582.901.423%201.432z%22%20fill%3D%22%23fff%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M58.874%201.727c0%20.305.15.457.451.457h1.254c.15%200%20.25-.05.3-.101.1-.051.1-.152.1-.305V.458c0-.306-.15-.458-.4-.458h-1.254c-.3%200-.45.152-.45.457v1.27zm1.905%201.677c.05%200%20.15%200%20.2.051l.001.001c.05.05.1.101.1.202V12.6c0%20.203-.1.305-.3.305h-1.556c-.2%200-.3-.102-.3-.305V5.385h-3.059v4.623c0%20.356.05.61.15.813.101.203.302.305.602.305h.251c.036.012.07.021.1.03.096.026.163.045.201.122.05.05.05.153.05.255v1.066c0%20.254-.2.356-.552.356-.55%200-1.053-.153-1.504-.356-.451-.254-.802-.559-1.053-.965-.25-.457-.35-.915-.35-1.473V5.335h-.853c-.05%200-.15-.05-.2-.102a.39.39%200%2001-.1-.254V3.71a.39.39%200%2001.1-.254c.05-.051.1-.102.2-.102h.853V1.88c0-.152%200-.203.05-.254.028-.028.072-.041.123-.056.04-.01.084-.023.127-.045l1.505-.458h.1c.05%200%20.1%200%20.15.102.05.101.05.153.05.254v1.981h4.914zm-9.776%200c.2%200%20.301.101.301.304v8.89c0%20.204-.1.306-.3.306h-1.305c-.1%200-.2-.052-.3-.153a.464.464%200%2001-.15-.356v-.61a4.037%204.037%200%2001-2.908%201.22%204.61%204.61%200%2001-2.307-.61c-.752-.406-1.303-.965-1.755-1.727-.451-.762-.652-1.574-.652-2.489%200-.864.25-1.676.652-2.438.4-.762%201.003-1.321%201.705-1.778.702-.458%201.504-.66%202.356-.66.652%200%201.204.1%201.705.304.451.203.902.559%201.304%201.016l.15-.915c.015-.044.025-.08.033-.11.021-.071.032-.107.067-.143.05-.051.1-.051.2-.051h1.204zm-12.585.355c.501.254.952.711%201.304%201.32.35.61.5%201.372.5%202.236v5.131c0%20.203-.1.305-.3.305h-1.454c-.2%200-.301-.102-.301-.305v-5.13c0-.356-.05-.712-.25-1.017a2.714%202.714%200%2000-.752-.762c-.352-.203-.653-.305-1.053-.305-.301%200-.653.102-.953.254-.351.153-.602.407-.802.762-.2.356-.301.762-.301%201.169v5.03c0%20.1%200%20.202-.1.253-.1.051-.201.102-.302.102h-1.353c-.2%200-.301-.102-.301-.305V3.708c0-.203.1-.305.3-.305h1.004c.1%200%20.25.052.3.102.05.05.101.153.151.254l.1%201.067c.351-.508.803-.864%201.304-1.118.502-.253%201.053-.355%201.604-.355.552%200%201.103.102%201.655.406zm10.73%204.37c.1.558-.05%201.016-.301%201.473-.25.457-.552.812-1.003%201.066a2.67%202.67%200%2001-1.404.407c-.501%200-.952-.152-1.404-.406a2.92%202.92%200%2001-1.003-1.067c-.25-.457-.35-.965-.35-1.474%200-.558.1-1.066.35-1.472.251-.458.602-.814%201.003-1.067a2.498%202.498%200%20011.354-.407c.501%200%20.953.152%201.404.407.401.253.752.61%201.003%201.067.25.457.35.914.35%201.472zm20.857-4.166c.752.406%201.304%201.016%201.755%201.778.451.762.651%201.574.651%202.438%200%20.863-.2%201.677-.651%202.439a4.938%204.938%200%2001-1.755%201.777%204.529%204.529%200%2001-2.407.661%204.528%204.528%200%2001-2.406-.66%204.937%204.937%200%2001-1.755-1.778%204.682%204.682%200%2001-.652-2.439c0-.864.2-1.676.652-2.438a4.938%204.938%200%20011.755-1.778%204.528%204.528%200%20012.406-.66c.853%200%201.655.202%202.407.66zm.35%204.115c0%20.559-.1%201.067-.35%201.524-.251.457-.552.813-.953%201.067a2.669%202.669%200%2001-1.404.406%202.67%202.67%200%2001-1.404-.406c-.401-.255-.752-.61-.952-1.067-.251-.457-.352-.915-.352-1.474%200-.507.1-1.015.352-1.472.25-.458.55-.762.952-1.067a2.67%202.67%200%20011.404-.407c.497-.005.985.136%201.404.407.4.253.752.61.952%201.067.251.457.351.914.351%201.422zm10.129-4.319c.5.254.952.711%201.353%201.32.351.61.501%201.372.501%202.236v5.131c0%20.203-.1.305-.3.305h-1.454c-.2%200-.301-.102-.301-.305v-5.13c0-.356-.05-.712-.25-1.017a2.715%202.715%200%2000-.753-.762c-.351-.203-.652-.305-1.053-.305-.3%200-.652.102-.953.254-.35.153-.601.407-.802.762-.2.356-.3.762-.3%201.169v5.03c0%20.1%200%20.202-.1.253-.1.051-.201.102-.302.102h-1.353c-.2%200-.301-.102-.301-.305V3.708c0-.203.1-.305.3-.305h1.004c.073%200%20.119.028.178.062l.072.04c.05.05.098.148.147.247l.004.007.1%201.067a3.438%203.438%200%20011.303-1.118c.502-.253%201.053-.355%201.605-.355.551%200%201.103.102%201.655.406zm12.884-.05c0-.204-.1-.305-.3-.305h-1.204c-.1%200-.15%200-.2.05v.001c-.05.05-.1.102-.1.253l-.151.915c-.4-.457-.852-.813-1.303-1.016-.502-.203-1.053-.305-1.705-.305-.852%200-1.655.203-2.356.66-.702.458-1.304%201.017-1.705%201.779s-.652%201.574-.652%202.438c0%20.915.2%201.727.652%202.49.45.761%201.003%201.32%201.755%201.726a4.61%204.61%200%20002.306.61%204.038%204.038%200%20002.908-1.22v.61a.464.464%200%2000.15.356c.1.101.2.153.301.153h1.304c.2%200%20.3-.102.3-.305v-8.89zm-2.457%205.893c.251-.457.401-.915.3-1.474%200-.558-.1-1.015-.35-1.472a2.915%202.915%200%2000-1.003-1.067c-.451-.255-.902-.407-1.403-.407-.502%200-.954.152-1.354.407-.401.253-.752.61-1.003%201.067-.251.406-.35.914-.35%201.472%200%20.509.099%201.017.35%201.474.25.457.602.812%201.003%201.066.451.255.902.407%201.403.407a2.669%202.669%200%20001.404-.406c.451-.255.752-.61%201.003-1.067zM97.48.712C97.379.66%2097.33.66%2097.228.66h-1.504c-.1%200-.15.05-.2.1v.002c-.051.05-.101.152-.101.254v11.531c0%20.204.1.305.3.305h1.505a.38.38%200%2000.25-.101.391.391%200%2000.1-.254V.965a.338.338%200%2000-.06-.182l-.04-.072zm10.328%204.775c.451.711.702%201.625.652%202.743%200%20.203-.051.406-.101.508-.049.101-.1.203-.2.203-.1.05-.251.05-.451.05h-6.518c.1.458.3.814.551%201.17.251.304.552.558.953.761.401.153.802.254%201.254.254.35%200%20.651-.05.902-.101.081-.033.157-.06.227-.086.148-.054.273-.1.375-.168.056-.038.119-.076.187-.117.113-.068.238-.143.364-.239l.201-.152c.05-.051.15-.051.2-.051.05%200%20.101.05.15.101l.753.915c.049.05.1.152.1.203%200%20.051%200%20.152-.1.204-.502.507-1.053.863-1.605%201.066a5.104%205.104%200%2001-1.754.305%204.359%204.359%200%2001-2.357-.66%204.936%204.936%200%2001-1.755-1.778%204.681%204.681%200%2001-.652-2.439c0-.864.2-1.676.602-2.438.401-.762%201.003-1.321%201.704-1.778.703-.458%201.505-.66%202.407-.66.752%200%201.454.202%202.156.558a4.51%204.51%200%20011.755%201.626zm-6.517%201.676v-.05c.15-.357.3-.712.601-1.017a2.46%202.46%200%2001.903-.711c.351-.203.702-.254%201.103-.254.601%200%201.103.203%201.554.559.451.356.802.863%201.003%201.473h-5.164zm-60.767%2012.04c.15%200%20.2.05.15.152%200%20.05%200%20.152-.05.254l-3.56%208.737a.378.378%200%2001-.35.255h-.803c-.15%200-.25-.052-.351-.255l-3.51-8.686c-.05-.051-.05-.153-.05-.203%200-.101.05-.152.099-.202l.002-.002c.1-.05.15-.05.25-.05h1.505c.15%200%20.3.101.35.304l2.156%206.046%202.156-6.096c.05-.153.15-.255.351-.255h1.655zm10.078.304c0-.203-.1-.305-.301-.305h-1.203c-.1%200-.15%200-.2.05-.037.037-.047.073-.068.146l-.033.11-.15.914c-.402-.458-.853-.813-1.304-1.017-.452-.203-1.053-.305-1.705-.305-.852%200-1.654.204-2.356.661-.702.457-1.304%201.016-1.705%201.778s-.651%201.575-.651%202.438c0%20.915.2%201.728.651%202.49.451.762%201.003%201.32%201.755%201.727a4.61%204.61%200%20002.306.61%204.037%204.037%200%20002.908-1.22v.61a.464.464%200%2000.15.355c.1.102.201.153.301.153h1.304c.2%200%20.3-.102.3-.305v-8.89zM48.145%2025.4c.25-.457.4-.915.3-1.474%200-.559-.1-1.016-.35-1.473a2.918%202.918%200%2000-1.003-1.067c-.451-.254-.902-.406-1.404-.406-.501%200-.953.152-1.354.406-.4.254-.752.61-1.002%201.067-.251.407-.352.914-.352%201.473%200%20.508.1%201.017.352%201.474.25.457.602.812%201.002%201.067.451.253.903.405%201.404.405a2.67%202.67%200%20001.404-.405c.451-.255.752-.61%201.003-1.067zm11.982%201.677l-.802-.965c-.05-.05-.1-.101-.15-.101-.05%200-.151%200-.201.05-.652.508-1.354.762-2.006.762-.501%200-.952-.102-1.404-.407a2.914%202.914%200%2001-1.002-1.066c-.25-.458-.351-.965-.351-1.524.002-.535.14-1.06.401-1.524.25-.458.602-.813%201.002-1.067a2.502%202.502%200%20011.354-.406c.356%200%20.71.052%201.053.152.351.101.652.305%201.003.559.05.05.1.05.15.05.1%200%20.15-.05.15-.101l.753-1.169c.05-.05.05-.1.05-.152%200-.05-.05-.152-.1-.203-.451-.355-.903-.66-1.404-.864a3.555%203.555%200%2000-1.655-.253c-.852%200-1.654.203-2.356.66-.752.406-1.304%201.016-1.755%201.778a4.68%204.68%200%2000-.652%202.438c0%20.915.2%201.727.652%202.49a4.94%204.94%200%20001.755%201.778c.752.406%201.554.66%202.407.66a3.89%203.89%200%20001.654-.355c.551-.204%201.002-.509%201.404-.814.1-.1.15-.152.15-.203%200-.05-.05-.152-.1-.203zm10.128-7.875c.2%200%20.301.102.301.305v8.89c0%20.204-.1.305-.3.305H68.95c-.1%200-.2-.05-.3-.153a.464.464%200%2001-.15-.355v-.61a4.037%204.037%200%2001-2.908%201.22%204.61%204.61%200%2001-2.307-.61c-.752-.407-1.303-.965-1.755-1.727-.45-.762-.652-1.575-.652-2.49%200-.863.251-1.676.652-2.438.401-.762%201.003-1.32%201.705-1.778.702-.457%201.504-.66%202.357-.66.651%200%201.203.101%201.704.304.451.204.902.56%201.304%201.017l.15-.915c.015-.045.025-.08.034-.11.02-.072.03-.108.066-.144.05-.05.1-.05.201-.05h1.203zM68.4%2023.926c.1.56-.05%201.017-.301%201.474-.25.457-.551.812-1.002%201.067a2.669%202.669%200%2001-1.405.405c-.5%200-.952-.152-1.403-.405a2.92%202.92%200%2001-1.003-1.067c-.25-.457-.351-.966-.351-1.474%200-.559.1-1.066.35-1.473a2.92%202.92%200%20011.004-1.067%202.502%202.502%200%20011.353-.406c.502%200%20.953.152%201.404.406.401.254.752.61%201.003%201.067.25.457.35.914.35%201.473zm17.548-4.723c.251%200%20.351.101.15.304v8.89c0%20.204-.1.305-.3.305h-.953a.327.327%200%2001-.178-.061%201.296%201.296%200%2000-.073-.04.28.28%200%2001-.15-.254l-.2-.915c-.602.915-1.504%201.372-2.708%201.372-.601%200-1.153-.152-1.705-.407a3.398%203.398%200%2001-1.353-1.32c-.351-.61-.552-1.372-.552-2.286v-3.607h-2.908v4.622c0%20.357.05.61.15.814.1.203.301.304.602.304h.251c.036.013.07.022.1.03.096.027.163.046.2.123.05.05.05.152.05.253v1.067c0%20.255-.2.356-.55.356-.552%200-1.053-.152-1.504-.356-.452-.253-.803-.507-1.053-.965-.251-.457-.352-.914-.352-1.473v-4.826h-.852a.381.381%200%2001-.2-.102.39.39%200%2001-.1-.254v-1.27c0-.101.05-.203.1-.254.05-.051.1-.101.2-.101h.852v-1.473c0-.153%200-.203.05-.255.029-.028.073-.04.123-.055a.684.684%200%2000.128-.046l1.504-.457h.1c.05%200%20.101.05.151.101.05.102.05.153.05.254v1.982h4.713c.2%200%20.301.101.301.304v5.182c.05.407.1.762.301%201.067.2.305.451.559.752.711.35.153.702.254%201.103.254.2%200%20.501-.05.802-.203.3-.152.602-.407.803-.762.25-.355.35-.762.35-1.321v-4.928c0-.203.1-.304.301-.304h1.504zm8.976.914c-.251-.254-.602-.457-1.053-.712a3.198%203.198%200%2000-1.404-.355c-.451%200-.903.102-1.254.355-.4.204-.702.509-.952.915l-.15-.813c-.013-.037-.022-.07-.03-.102-.027-.097-.045-.164-.12-.203-.051-.05-.151-.05-.302-.05h-1.052c-.201%200-.301.101-.301.305v8.788c0%20.203.1.305.3.305h1.505c.2%200%20.3-.102.3-.305v-5.08c0-.457.1-.864.25-1.169.151-.304.402-.558.653-.71.3-.153.551-.255.903-.255.29-.003.58.049.851.153.251.101.502.254.752.406.028.014.05.027.073.04.058.035.105.062.178.062.1%200%20.15-.051.2-.102l.703-.965c.05-.05.1-.153.1-.203%200-.102-.05-.203-.15-.305zm7.369-.508a3.9%203.9%200%20011.704%201.676c.451.711.702%201.626.702%202.693%200%20.203-.05.406-.1.508a.396.396%200%2001-.201.203c-.1.05-.25.05-.451.05h-6.518c.1.458.3.814.552%201.17.25.304.551.558.952.761.401.153.803.254%201.254.254.351%200%20.652-.05.902-.101.081-.033.157-.06.228-.087.147-.053.272-.099.374-.168.055-.037.117-.074.184-.114.114-.069.24-.145.367-.241l.201-.152c.05-.051.151-.051.2-.051.05%200%20.101.05.151.101l.752.915c.05.05.1.152.1.203%200%20.05%200%20.153-.1.203-.501.508-1.053.864-1.605%201.067a5.1%205.1%200%2001-1.754.305%204.36%204.36%200%2001-2.357-.66%204.939%204.939%200%2001-1.755-1.779%204.68%204.68%200%2001-.651-2.438c0-.864.2-1.677.601-2.439.402-.761%201.003-1.32%201.705-1.778.702-.457%201.504-.66%202.406-.66.752%200%201.455.203%202.157.56zm-4.714%203.352v-.05c.15-.356.3-.712.602-1.016.3-.305.551-.56.902-.712.351-.203.702-.254%201.104-.254.601%200%201.102.204%201.554.56.451.354.802.863%201.003%201.473h-5.165zm16.145-3.2c.652.407%201.304%201.016%201.655%201.727.351.712.551%201.524.551%202.439%200%20.914-.2%201.727-.602%202.489a4.199%204.199%200%2001-1.654%201.728%204.482%204.482%200%2001-2.306.61c-.501%200-1.003-.153-1.504-.357a4%204%200%2001-1.354-.914l-.15.711c-.05.153-.101.254-.151.305a.382.382%200%2001-.251.102h-1.253c-.2%200-.301-.102-.301-.305V16.714c0-.204.101-.305.301-.305h1.504c.2%200%20.301.1.301.305v3.555a3.908%203.908%200%20011.304-.863%204.034%204.034%200%20011.554-.305c.902%200%201.654.254%202.356.66zm.151%204.165c0%20.56-.1%201.067-.3%201.474-.251.457-.552.812-.953%201.067a2.543%202.543%200%2001-1.404.405%202.996%202.996%200%2001-1.454-.405%202.682%202.682%200%2001-1.053-1.067%203.101%203.101%200%2001-.401-1.474c0-.559.151-1.016.401-1.473.243-.45.609-.82%201.053-1.067.451-.254.902-.406%201.454-.406.501%200%20.952.152%201.354.406.401.254.702.61.952%201.067.251.457.351.966.351%201.473zm12.534-4.724c.2%200%20.301.102.301.305v8.89c0%20.204-.101.305-.301.305h-1.304c-.1%200-.2-.05-.301-.153a.463.463%200%2001-.15-.355v-.61a4.034%204.034%200%2001-2.908%201.22%204.608%204.608%200%2001-2.306-.61c-.752-.407-1.304-.965-1.755-1.727-.451-.762-.652-1.575-.652-2.49%200-.863.251-1.676.652-2.438.401-.762%201.003-1.32%201.704-1.778.702-.457%201.504-.66%202.357-.66.652%200%201.203.101%201.705.304.451.204.902.56%201.303%201.017l.151-.915.033-.11c.021-.072.031-.108.067-.144.05-.05.1-.05.201-.05h1.203zm-1.855%204.724c.1.56-.05%201.017-.3%201.474-.251.457-.552.812-1.003%201.067a2.673%202.673%200%2001-1.404.405c-.502%200-.953-.152-1.404-.405a2.923%202.923%200%2001-1.003-1.067c-.251-.457-.351-.966-.351-1.474%200-.559.1-1.066.351-1.473a2.923%202.923%200%20011.003-1.067%202.5%202.5%200%20011.353-.406c.502%200%20.953.152%201.405.406.4.254.752.61%201.002%201.067.251.457.351.914.351%201.473zm10.629-4.369c.502.255.953.712%201.354%201.321.352.61.502%201.372.502%202.236v5.13c0%20.204-.101.305-.301.305h-1.454c-.2%200-.301-.101-.301-.305v-5.13c0-.356-.05-.712-.251-1.016a2.691%202.691%200%2000-.752-.762c-.351-.203-.651-.305-1.053-.305-.301%200-.651.102-.952.254-.351.152-.602.406-.802.762a2.379%202.379%200%2000-.301%201.168v5.03c0%20.101%200%20.203-.1.253l-.006.003c-.098.05-.197.1-.295.1h-1.354c-.2%200-.301-.102-.301-.305v-8.79c0-.202.101-.304.301-.304h1.003c.074%200%20.12.027.18.063l.07.039c.05.05.1.15.149.25l.002.003.1%201.067a3.433%203.433%200%20011.304-1.117c.501-.254%201.053-.356%201.604-.356.552%200%201.103.102%201.654.406zm12.183%208.79c0-.102-.05-.152-.1-.203l-3.961-4.979%203.359-3.505c.05-.05.05-.102.05-.203%200-.102-.05-.152-.1-.204a.38.38%200%2000-.25-.1h-1.555c-.1%200-.2%200-.25.05-.049%200-.144.095-.196.147l-.005.005-3.359%203.607v-6.198c0-.203-.101-.304-.301-.304h-1.504c-.201%200-.301.101-.301.304v11.583c0%20.203.1.305.301.305h1.554c.201%200%20.301-.102.301-.305v-2.845l.902-.915%202.909%203.81.2.204c.05.05.1.05.2.05h1.805c.101%200%20.151-.05.201-.101.05-.05.1-.101.1-.203z%22%20fill%3D%22%23fff%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"} /></a>

export default Logo
