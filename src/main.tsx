import React from "react";
import Typewriter from "typewriter-effect";
import { Header } from "./components";

const Main = () => {
    return (
        <div>
            <Header />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hello World!")
                        .callFunction(() => {
                            console.log("String typed out!");
                        })
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log("All strings were deleted");
                        })
                        .start();
                }}
            />
            Teste Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ducimus itaque maxime eius sint placeat aperiam quisquam similique
            sed unde nisi, temporibus et expedita inventore sapiente ut corrupti
            non pariatur. Unde. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam nam labore officia quae ipsa nemo porro
            quo sapiente consequatur, nihil fugit, laborum ea cumque atque
            incidunt architecto ab tenetur. Impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque
            non accusantium. Distinctio ex nesciunt porro, explicabo excepturi
            esse perspiciatis temporibus sequi! Magnam nulla, exercitationem
            velit quod voluptas asperiores iusto? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Delectus, vitae nostrum! Similique,
            laborum! Reprehenderit blanditiis quam unde qui quo officiis
            obcaecati ea. Harum labore qui error, neque perspiciatis nulla
            commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque esse, saepe totam minima nesciunt reprehenderit aperiam
            illo vero! Dicta magnam debitis vel corporis maiores corrupti labore
            magni, ipsa temporibus veritatis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Pariatur incidunt eveniet, dolorum,
            totam cupiditate corporis blanditiis id nesciunt temporibus odit
            vero accusantium. Voluptates ullam voluptas sit fugit consequuntur
            modi laborum? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam et alias, quo magni minus excepturi facere enim quaerat
            quam laborum possimus recusandae sint molestiae iure quibusdam iste
            officia. Tenetur, eos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Debitis harum alias magni non adipisci veritatis
            quis beatae voluptates, saepe tempore cupiditate quos dolores
            doloribus illum aut sequi voluptas nisi at! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Fugit neque iusto ipsam facere,
            placeat error ducimus nulla at magnam corrupti quas laborum ad est!
            Neque dolorum laborum earum a nulla. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolor esse repellendus nobis obcaecati
            aliquid earum? Voluptas, nesciunt aliquid eius, harum corporis
            temporibus sed pariatur libero eligendi dolor nisi adipisci
            accusamus? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse at nibh tempus, vehicula nibh ac, porttitor dui. Morbi
            malesuada eleifend lorem, eget posuere leo rhoncus ac. Aenean
            posuere blandit metus sit amet blandit. Fusce elementum eget metus
            sed sagittis. Vestibulum ac risus erat. Nam ultrices et mi nec
            finibus. Pellentesque a ante elementum, tincidunt orci sed, pharetra
            libero. Pellentesque ac dui condimentum, consectetur ligula vel,
            vehicula nulla. Sed suscipit est pellentesque sodales fermentum.
            Nulla efficitur sapien interdum neque tincidunt, non pretium eros
            pharetra. Donec in iaculis ex. Donec in nisi at est tincidunt
            mattis. Aliquam finibus enim condimentum risus laoreet malesuada.
            Mauris ut eleifend massa, nec auctor magna. Maecenas quam nisi,
            auctor vel elementum vel, tempor sit amet mi. Nam euismod mauris
            eros, eu lacinia lorem vestibulum eu. Fusce malesuada pharetra
            facilisis. Proin eu lectus scelerisque, ullamcorper libero vel,
            maximus eros. Vivamus molestie id quam non elementum. Sed
            sollicitudin accumsan dui, vitae sollicitudin risus dictum a. Ut a
            blandit quam. Morbi sed nunc quis metus consequat luctus vitae vitae
            est. Ut lacinia et magna eu tempor. Mauris lacinia, mauris sed
            aliquam hendrerit, lectus odio convallis turpis, at blandit est est
            non augue. Morbi non venenatis purus. Aenean dictum accumsan eros ac
            gravida. Vestibulum id faucibus orci. Proin id leo aliquam,
            porttitor enim vitae, tempor nibh. Suspendisse ligula tellus,
            condimentum vitae egestas et, gravida eu ante. Praesent ultricies
            cursus eleifend. Sed mauris lacus, hendrerit in lacinia id, porta a
            odio. Curabitur at odio porta, efficitur velit ut, rhoncus velit.
            Maecenas dictum, leo at egestas tempor, augue lectus tempor leo, id
            porttitor leo ipsum sit amet ipsum. Integer ullamcorper ante maximus
            ullamcorper blandit. Fusce et ipsum quis mi pulvinar pretium.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. In metus sem, posuere ac malesuada nec,
            mollis vel lorem. Nunc sodales augue felis, vel tempor justo
            ultrices a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In efficitur mi vel pretium laoreet. Maecenas tempus ipsum sit amet
            vulputate hendrerit. Donec scelerisque, libero ac commodo efficitur,
            lorem eros suscipit tortor, non sollicitudin diam ligula et sapien.
            Nullam mattis non nisl eu egestas. Duis eu rutrum sapien, in commodo
            nulla. Suspendisse lacinia, enim vitae fringilla iaculis, nunc metus
            aliquam velit, at tempus tortor eros non ligula. Proin accumsan
            eleifend ornare. Ut feugiat finibus sapien, vel lacinia dolor mattis
            et. Nulla tempor fringilla magna, sed elementum massa congue ut.
            Maecenas non mauris id lectus sodales hendrerit. Cras leo eros,
            luctus vitae lacus ac, lobortis tristique felis. Phasellus magna
            orci, bibendum non pharetra id, semper eu enim. Ut ut dignissim
            sapien, quis lacinia erat. Ut eget nulla mauris. Proin elementum
            mauris augue, in commodo leo sagittis sed. Sed vel velit nisi.
            Aenean sagittis sem nulla, nec interdum mauris consequat nec. In id
            dolor vel odio semper gravida.
            <div id="sobre">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sequi ducimus non vel nihil aliquid sint magnam labore tenetur facilis! Facere nulla repellat, tempore eum numquam aperiam sunt iste quis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae, nam dolores dignissimos, tempora eum est ut, obcaecati illo laborum possimus sed minus assumenda asperiores. Consequatur doloremque harum culpa vitae.
            </div>
        </div>
    );
};

export default Main;
