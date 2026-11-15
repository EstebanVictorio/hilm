import { FastMCP } from "fastmcp"
import { tool as publishTool } from "./tools/publish"

const mcpServer = new FastMCP({
  name: "hilm-mcp",
  version: "0.0.1",
})

mcpServer.addTool(publishTool)


mcpServer.start({
  transportType: 'stdio'
})