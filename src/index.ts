import fetch from 'node-fetch';
import fs from 'fs';

type Movie = {
    active_channels: string[];
    album: any[];
    banner_image: any;
    banner_image_mobile: any;
    behind_scenes_path: any;
    bts_poster_picture: string;
    channel_slugs: any;
    confession: any;
    cover_picture: string;
    cover_title_picture: string;
    director: any;
    erika_comment: string;
    featured: boolean;
    guest_stars: any[];
    id: number;
    info_title_picture: string;
    is_compilation: boolean;
    is_free: any | null;
    is_original: boolean;
    length: string;
    mobile_detail_picture: string;
    model_type: string;
    outstanding_text: any | null;
    performers: any;
    photographer: any | null;
    poster_picture: string;
    producer: any;
    production_date: string;
    release_date: string;
    short_synopsis: string;
    short_synopsis_clean: string;
    slug: string;
    status: string;
    synopsis: string;
    synopsis_clean: string;
    tags: any;
    title: string;
    trailer_path: any;
    user_level: number;
}

const get_movie = async (count: number): Promise<Movie | null> => {
    try {
        const result = await fetch(
            `https://xconfessions.com/api/movies/${count}`,
            {
                method: 'GET',
                headers: {
                    // ':authorime': 'https',
                    'accept': 'application/json, text/plain, */*',
                    'accept-encoding': 'gzip, deflate, br',
                    'accept-language': 'en-DE,en;q=0.9,de-DE;q=0.8,de;q=0.7,en-US;q=0.6,fr;q=0.5',
                    'authorization': 'ENTED_AUTH_HERE',
                    'cookie': '__cfduid=d9adfaac8dd96cd93e91c899436a6e7521608202252; newsletter_close=%7B%22displayTime%22%3A1608202286650%2C%22displayed%22%3A1%7D; Authorization=%7B%22token_type%22%3A%22Bearer%22%2C%22expires_in%22%3A5184000%2C%22access_token%22%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMzhkMTdlNmJhNTY4NGNkZjVlN2RjMjc1MWNiZWMxN2EyYTlkNjI3YjBjZjNlZGJhMTQwODVkY2IyMDE4MGNjOWRjNzI5ODFjMGY3OWM3NTMiLCJpYXQiOiIxNjA4MjAyNzc3Ljg4MDM2OSIsIm5iZiI6IjE2MDgyMDI3NzcuODgwMzcyIiwiZXhwIjoiMTYxMzM4Njc3Ny44MDIxNzIiLCJzdWIiOiIxMjY4OTkzOTI0MTQyNDkiLCJzY29wZXMiOltdfQ.ibJVgj1BtSM-S8nbEoXVr34TWGOlR2fScXshiNzK8wRDcM4B6NDak1Eo5T8UZdhfpQmDgc3kg9kgzqClkNMfO7U_LmDbVkbfQ6Zije26jr-4Sy9WT6jk5k5maWmyDU3IzGRagrNNuPeZDY3e9QLk7hprvgzF6VUQQAWhl0QSG9hlCmTVC8cYxPeyZzr6qiwQwZl1_K9Xh8NTI0T8NOeRarcjDC_xxBtDA2ywW_y_eSbi3Tue2acc4YbyiDdb6ng84css0yUx7nDgmypP8kQkiHdpM1omeOkmoF40hHt69sLH7DPiDQgXT-NJsmenQciJvwMz-_EaAV8jzmF95Ji7ZoaoAal8eGnE4QQjDHMIZwBcSlZ2sVOulYssuCp99-yy8q3zSFe1OctfWkbHmeMtFKCDM6G1DM1AbXzXEnB5Kps1lh1xAsXQSxYiJz9u2PT4RHMxo1M4CNdm3jAQqHIlii73ZXbJGhZZhq9L1i3UwEaeb9gIux0M2LXxijGEz5kdnJ6IylAqkheACVYsXXT_lafUp6U12Fcs6zdDAgW9ZdBJdwIDpgnXNrrbmxmbn7K_lKLFQKSJnmXmugEKXYDp6QXwG32vS-Jo3mc9v6g88bQ-OXbCdSJo-7MIeqVZE6SzTn9Sa-BHCjpBI3SaFRU9MtxGTtbmT0SkUG0nzn5rLQU%22%2C%22refresh_token%22%3A%22def50200197a04d087cbff265de977b4d4aadb3bb12357bf6d25232809cfd3510b3245d2b4330d362c265b761b832ce6ed7bf945a07bc807e0ca600423fb6306e1fb8f92c0ec98bf6cbba39ced2ac825ee4a238a44404a03795d7dd824b79e7a51e49e65a2d4f230ebfa09fffa88de816169ad1fd56f7421291d973196191610cee0540c48a6a1d7985981c1d937ae06006dae4162a413fd399c00051485d88843d529073624249c31df139123c4fc7ec22b6b0c8d6c0d15dff4c3df90d65090208af38293495d013c7b8153478d8052e590d37aaafd9eee50535e45e7d8056ae4680b7d446ac9b7bafa76d1e2a03b52d76ca266b4b2e8a277c25aff7c8b097bd4db7c2b494b12cfaadb36e1a611315f19ec0b2a1147ee49fc5806f6c0ddec1f0d5e803bf87ce48aaa9dd5b6e02887d7c5be061da8c4bcbddc88b2a1104216875f4dad37caa6d883248513e9112daf7b0c011ed2d56a352d64aa720319c57d4809f92283131df05d984fd513d6e5e5%22%7D; cf_clearance=cec94a93b2a0d8bc4b87a1a50cbc4b0a6954a10a-1608202783-0-150',
                    'locale': 'en',
                    'referer': 'https://xconfessions.com/',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'x-el-country': 'DE',
                    'x-requested-with': 'XMLHttpRequest',
                }
            },
        );

        const json = await result.json();

        return json.data;

    } catch (error) {
        console.error(error)

        return null
    }
}

const get_download_link = async (count: number): Promise<string | null> => {
    try {
        const result = await fetch(
            `https://xconfessions.com/api/movies/${count}/download`,
            {
                method: 'POST',
                body:    JSON.stringify(
                    {
                        quality: 1080,
                        trailer: false,
                    }
                ),
                headers: {
                    // ':authorime': 'https',

                    'accept': 'application/json, text/plain, */*',
                    'accept-encoding': 'gzip, deflate, br',
                    'accept-language': 'en-DE,en;q=0.9,de-DE;q=0.8,de;q=0.7,en-US;q=0.6,fr;q=0.5',
                    'cookie': '__cfduid=d9adfaac8dd96cd93e91c899436a6e7521608202252; newsletter_close=%7B%22displayTime%22%3A1608202286650%2C%22displayed%22%3A1%7D; Authorization=%7B%22token_type%22%3A%22Bearer%22%2C%22expires_in%22%3A5184000%2C%22access_token%22%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMzhkMTdlNmJhNTY4NGNkZjVlN2RjMjc1MWNiZWMxN2EyYTlkNjI3YjBjZjNlZGJhMTQwODVkY2IyMDE4MGNjOWRjNzI5ODFjMGY3OWM3NTMiLCJpYXQiOiIxNjA4MjAyNzc3Ljg4MDM2OSIsIm5iZiI6IjE2MDgyMDI3NzcuODgwMzcyIiwiZXhwIjoiMTYxMzM4Njc3Ny44MDIxNzIiLCJzdWIiOiIxMjY4OTkzOTI0MTQyNDkiLCJzY29wZXMiOltdfQ.ibJVgj1BtSM-S8nbEoXVr34TWGOlR2fScXshiNzK8wRDcM4B6NDak1Eo5T8UZdhfpQmDgc3kg9kgzqClkNMfO7U_LmDbVkbfQ6Zije26jr-4Sy9WT6jk5k5maWmyDU3IzGRagrNNuPeZDY3e9QLk7hprvgzF6VUQQAWhl0QSG9hlCmTVC8cYxPeyZzr6qiwQwZl1_K9Xh8NTI0T8NOeRarcjDC_xxBtDA2ywW_y_eSbi3Tue2acc4YbyiDdb6ng84css0yUx7nDgmypP8kQkiHdpM1omeOkmoF40hHt69sLH7DPiDQgXT-NJsmenQciJvwMz-_EaAV8jzmF95Ji7ZoaoAal8eGnE4QQjDHMIZwBcSlZ2sVOulYssuCp99-yy8q3zSFe1OctfWkbHmeMtFKCDM6G1DM1AbXzXEnB5Kps1lh1xAsXQSxYiJz9u2PT4RHMxo1M4CNdm3jAQqHIlii73ZXbJGhZZhq9L1i3UwEaeb9gIux0M2LXxijGEz5kdnJ6IylAqkheACVYsXXT_lafUp6U12Fcs6zdDAgW9ZdBJdwIDpgnXNrrbmxmbn7K_lKLFQKSJnmXmugEKXYDp6QXwG32vS-Jo3mc9v6g88bQ-OXbCdSJo-7MIeqVZE6SzTn9Sa-BHCjpBI3SaFRU9MtxGTtbmT0SkUG0nzn5rLQU%22%2C%22refresh_token%22%3A%22def50200197a04d087cbff265de977b4d4aadb3bb12357bf6d25232809cfd3510b3245d2b4330d362c265b761b832ce6ed7bf945a07bc807e0ca600423fb6306e1fb8f92c0ec98bf6cbba39ced2ac825ee4a238a44404a03795d7dd824b79e7a51e49e65a2d4f230ebfa09fffa88de816169ad1fd56f7421291d973196191610cee0540c48a6a1d7985981c1d937ae06006dae4162a413fd399c00051485d88843d529073624249c31df139123c4fc7ec22b6b0c8d6c0d15dff4c3df90d65090208af38293495d013c7b8153478d8052e590d37aaafd9eee50535e45e7d8056ae4680b7d446ac9b7bafa76d1e2a03b52d76ca266b4b2e8a277c25aff7c8b097bd4db7c2b494b12cfaadb36e1a611315f19ec0b2a1147ee49fc5806f6c0ddec1f0d5e803bf87ce48aaa9dd5b6e02887d7c5be061da8c4bcbddc88b2a1104216875f4dad37caa6d883248513e9112daf7b0c011ed2d56a352d64aa720319c57d4809f92283131df05d984fd513d6e5e5%22%7D; cf_clearance=cec94a93b2a0d8bc4b87a1a50cbc4b0a6954a10a-1608202783-0-150',
                    'Content-Type': 'application/json',
                    'locale': 'en',
                    'referer': 'https://xconfessions.com/',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'x-el-country': 'DE',
                    'x-requested-with': 'XMLHttpRequest',
                    'authorization': 'ENTED_AUTH_HERE',
                }
            },
        );

        const json = await result.json();

        return json?.data?.download_url ?? null;
    } catch (error) {
        console.error(error);

        return null;
    }
}

(async () => {


    for(let count = 0; count < 1500; count++) {

        const movie = await get_movie(count);
        const download_link = await get_download_link(count);

        if (!download_link || !movie) {
            console.log(`no download link for ${count}`);
            continue;
        }

        const file_stream = await fetch(download_link);
        const film_buffer = await file_stream.buffer();

        fs.writeFile(
            `${movie.slug}.mp4`,
            film_buffer,
            () => console.log(`${movie.slug} success!`)
        );



        if (movie) {
            console.log(count, ' - ', movie.slug, '-', download_link);
        }


    }


})();
