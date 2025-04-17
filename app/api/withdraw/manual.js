// app/api/withdraw/manual.js

export async function POST(request) {
  try {
    const body = await request.json();

    const { amountTHB, recipientBank, recipientAccount, purpose } = body;

    if (!amountTHB || !recipientBank || !recipientAccount) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Simulate manual review queue
    const withdrawData = {
      amountTHB,
      recipientBank,
      recipientAccount,
      purpose,
      status: "PENDING_APPROVAL",
      timestamp: new Date().toISOString(),
    };

    console.log("Manual Withdraw Requested:", withdrawData);

    return Response.json({
      message: "Withdraw request submitted successfully",
      data: withdrawData,
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
