import { LunataskApiClient } from "api";
import { ObsidianFetcher } from "api/fetcher";

const token = "eyJraWQiOiIwMDg0NjAyOWE5NThjZTIwOTA3MThjM2Y0NGMzNGFhYjUyZmU3ZWI5MTYyOTVkOGMwMDc3NmQ5ZWMwMGY5ZTQxIiwiYWxnIjoiUlM1MTIifQ.eyJhdWQiOiJhcGkiLCJzdWIiOiIwZWE2ZWUzNy05YzZjLTQ0ZTgtYWJlNi04NDQzZTFkOGFhNDgiLCJqdGkiOiI1MTY3ZDQ4OS02NTcwLTRkYWEtYmNlNy1iMDBlNjc4ZTgzZGMifQ.DNm9wEACtcY_shkMJiA57qLAarWlXrBcwP5whLMDWKR6LHPiX-AiWigZvaunoQJlR1-DFZdDuei9xoh5-Hyn4ARabF2IMbTkE552NaGQkG0zwmqowMcWKn9ISVCL755PrZj-LXuQrtYVN0WMlJjJHWGkeqO3_YbFns5wa04KvMYAEQeWaJDWfbHGuHyBMsehZkdyeXrQR271Tj2WS1LZJqCc4Ry6T5XM58PVcSP_nV8ZfxxQWurFIoJ057yZMMqHKwukE0jeqwlgS7fCt_NF5PO9P_5uy-ZuevGvJJtIOEBwXyGtnQLyyyKGKXofmcc0_nH-kdxvyKMRzt-3j1k9kQ"
const badToken="123"

const api = new LunataskApiClient(token, new ObsidianFetcher());

export async function pingTestLunataskApi(): Promise<void> {
   // Catch any errors that might occur during the ping
    await api.ping()
        .then(() => {
            console.log("Ping successful");
        })
        .catch((error) => {
            console.error("Ping failed:", error);
        });
}