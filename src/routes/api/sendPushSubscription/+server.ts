// server endpoints file
import type { RequestHandler } from "@sveltejs/kit";
import webPush from "web-push";

// todo (figure out if we need to bring it back)
// const VAPID_PUBLIC_KEY = import.meta.env.VITE_VAPID_PUBLIC_KEY;
// const VAPID_PRIVATE_KEY = import.meta.env.VITE_VAPID_PRIVATE_KEY;

// webPush.setVapidDetails(
//   "mailto:contact@stocknear.com",
//   VAPID_PUBLIC_KEY,
//   VAPID_PRIVATE_KEY
// );

export const POST: RequestHandler = async ({ request, locals }) => {
  // const { pb, apiKey } = locals;
  // const { title, body, key } = await request?.json();

  // if (apiKey !== key) {
  //   console.warn("Invalid API key");
  //   return new Response(
  //     JSON.stringify({ success: false, error: "Invalid API key" }),
  //     { status: 401 }
  //   );
  // }

  // try {
  //   const subscriptions = await pb
  //     .collection("pushSubscription")
  //     .getFullList({ sort: "-created" });

  //   if (!subscriptions.length) {
  //     console.warn("No subscriptions found.");
  //     return new Response(
  //       JSON.stringify({ success: false, error: "No subscriptions found" }),
  //       { status: 404 }
  //     );
  //   }

  //   const sendNotifications = subscriptions.map(async (subRecord) => {
  //     try {
  //       const subscriptionData = subRecord.subscription?.subscription;

  //       if (!subscriptionData || !subscriptionData.endpoint) {
  //         console.warn(`Skipping invalid subscription: ${subRecord.id}`);
  //         return;
  //       }

  //       // Send just the body text for Android
  //       const isAndroid =
  //         !subscriptionData.endpoint.includes("web.push.apple.com");
  //       const payload = isAndroid ? body : JSON.stringify({ title, body });

  //       await webPush.sendNotification(subscriptionData, payload);
  //       console.log(`Notification sent to: ${subscriptionData.endpoint}`);
  //     } catch (error: any) {
  //       console.error(`Error sending notification to ${subRecord.id}:`, error);

  //       if (error.statusCode === 410 || error.statusCode === 404) {
  //         console.warn(`Deleting invalid subscription: ${subRecord.id}`);
  //         await pb.collection("pushSubscription").delete(subRecord.id);
  //       }
  //     }
  //   });

  //   await Promise.all(sendNotifications);

  //   return new Response(
  //     JSON.stringify({
  //       success: true,
  //       message: `Notifications sent to ${subscriptions.length} devices`,
  //     })
  //   );
  // } catch (error: any) {
  //   console.error("Error sending notifications:", error);
  //   return new Response(
  //     JSON.stringify({ success: false, error: error.message }),
  //     { status: 500 }
  //   );
  // }

  return new Response(
    JSON.stringify({
      success: true,
      message: `Notifications not sent`,
    })
  );
};
